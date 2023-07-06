import type { IContext } from '@/shared/interfaces/index.js';
import { z } from 'zod';
import { userService } from '../services/user.service.js';
import { Selectable } from 'kysely';
import type { User } from '@/db/types.js';
import { createSchemaValidator } from '@/utils/index.js';

const dtoSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const validateDTO = createSchemaValidator(dtoSchema);
export type GetUsersDTO = z.infer<typeof dtoSchema>;

type GetUserUseCaseResult = {
  user: Selectable<User>;
};
export async function createUserUseCase(dto: GetUsersDTO, ctx: IContext): Promise<GetUserUseCaseResult> {
  const { name, email, password } = await validateDTO(dto);

  const userData = { name, email, password };

  const user = await userService.insertUser(userData);

  return {
    user,
  };
}
