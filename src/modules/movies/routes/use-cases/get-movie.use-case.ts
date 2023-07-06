import { IContext } from '@/shared/interfaces/index.js';
import { BadInputError } from '@/errors/index.js';
import { createSchemaValidator } from '@/utils/index.js';
import { z } from 'zod';
import { MovieSchema } from '@/db/schema/index.js';
import { db } from '@/db/index.js';

const dtoSchema = z.object({
  name: MovieSchema.shape.name,
});

const validateDTO = createSchemaValidator(dtoSchema);

export type MovieDTO = z.infer<typeof dtoSchema>;

type MovieUseCaseResult = {
  movie: any;
};

export async function getMovieUseCase(dto: MovieDTO, ctx: IContext): Promise<MovieUseCaseResult> {
  const { name } = await validateDTO(dto);

  const existingMovie = await db.selectFrom('Movie').select('name').where('name', '=', name).executeTakeFirst();

  if (!existingMovie) {
    throw new BadInputError({ movie: ['Movie not found'] });
  }

  return { movie: existingMovie };
}
