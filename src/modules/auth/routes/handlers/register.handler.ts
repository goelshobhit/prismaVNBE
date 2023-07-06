import { RequestHandler } from 'express';
import { registerUseCase } from '../use-cases/register.use-case.js';

export const registerHandler: RequestHandler<any, any, any, any> = async (req, res) => {
  const { email, name, password } = req.body as any;

  const { user } = await registerUseCase(
    {
      email,
      name,
      password,
    },
    req.context,
  );

  res.send(user);
};
