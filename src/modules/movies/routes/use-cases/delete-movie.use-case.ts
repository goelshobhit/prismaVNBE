import { IContext } from '@/shared/interfaces/index.js';
import { InternalServerError } from '@/errors/index.js';
import { createSchemaValidator } from '@/utils/index.js';
import { z } from 'zod';
import { MovieSchema } from '@/db/schema/index.js';
import { db } from '@/db/index.js';

const dtoSchema = z.object({
  id: MovieSchema.shape.id,
});

const validateDTO = createSchemaValidator(dtoSchema);

export type MovieDTO = z.infer<typeof dtoSchema>;

type MovieUseCaseResult = {
  movie: any;
};

export async function deleteMovieUseCase(dto: MovieDTO, ctx: IContext): Promise<MovieUseCaseResult> {
  const { id } = await validateDTO(dto);

  const movie = await db.deleteFrom('Movie').where('Movie.id', '=', id).executeTakeFirst();

  if (!movie) {
    throw new InternalServerError('Failed to update movie');
  }

  return { movie };
}
