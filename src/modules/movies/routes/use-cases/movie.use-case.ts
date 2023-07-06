import { IContext } from '@/shared/interfaces/index.js';
import { BadInputError, InternalServerError } from '@/errors/index.js';
import { createSchemaValidator } from '@/utils/index.js';
import { z } from 'zod';
import { MovieSchema } from '@/db/schema/index.js';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/db/index.js';

const dtoSchema = z.object({
  name: MovieSchema.shape.name,
  directorName: MovieSchema.shape.directorName,
  description: MovieSchema.shape.description,
  releaseDate: MovieSchema.shape.releaseDate,
});

const validateDTO = createSchemaValidator(dtoSchema);

export type MovieDTO = z.infer<typeof dtoSchema>;

type MovieUseCaseResult = {
  movie: any;
};

export async function MovieUseCase(dto: MovieDTO, ctx: IContext): Promise<MovieUseCaseResult> {
  const { name, description, directorName, releaseDate } = await validateDTO(dto);

  const existingMovie = await db.selectFrom('Movie').select('name').where('name', '=', name).executeTakeFirst();

  if (existingMovie) {
    throw new BadInputError({ email: ['Movie already created'] });
  }

  const movie = await db
    .insertInto('Movie')
    .values({
      id: uuidv4(),
      name,
      description,
      directorName,
      releaseDate,
      userId: 'demo',
    })
    .returningAll()
    .executeTakeFirst();

  if (!movie) {
    throw new InternalServerError('Failed to create movie');
  }

  return { movie };
}
