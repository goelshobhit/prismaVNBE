import { z } from 'zod';

const createdAt = z.string().datetime();
const updatedAt = z.string().datetime();

export const UserSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
  .merge(z.object({ createdAt, updatedAt }));

export const MovieSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    directorName: z.string(),
    releaseDate: z.date(),
    user: z.object({}),
  })
  .merge(z.object({ createdAt, updatedAt }));
