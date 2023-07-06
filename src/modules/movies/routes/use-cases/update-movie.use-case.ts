import { IContext } from '@/shared/interfaces/index.js';
import { InternalServerError } from '@/errors/index.js';
import { createSchemaValidator } from '@/utils/index.js';
import { z } from 'zod';
import { MovieSchema } from '@/db/schema/index.js';
import { db } from '@/db/index.js';

const dtoSchema = z.object({
  id: MovieSchema.shape.id,
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

export async function updateMovieUseCase(dto: MovieDTO, ctx: IContext): Promise<MovieUseCaseResult> {
  const { id, name, description, directorName, releaseDate } = await validateDTO(dto);

  const movie = await db
    .updateTable('Movie')
    .set({
      name,
      description,
      directorName,
      releaseDate,
    })
    .where('Movie.id', '=', id)
    .executeTakeFirst();

  if (!movie) {
    throw new InternalServerError('Failed to update movie');
  }

  return { movie };
}
