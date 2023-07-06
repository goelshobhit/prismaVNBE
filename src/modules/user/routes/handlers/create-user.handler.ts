import { RequestHandler } from 'express';
import { userFactory } from '../../factories/user.factory.js';
import { createUserUseCase } from '../../use-cases/create-user.use-case.js';
import { bcryptUtil } from '../../../../utils/bcrypt.util.js';

export const createUserHandler: RequestHandler<any, any, any, any> = async (req, res) => {
  const getPassword = await bcryptUtil.generateHash(req.body.password);

  const { user } = await createUserUseCase(
    {
      name: req.body.name,
      email: req.body.email,
      password: getPassword,
    },
    req.context,
  );

  res.send(userFactory.toFullResponse(user));
};
