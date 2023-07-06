import { RequestHandler } from 'express';
import { deleteMovieUseCase } from '../use-cases/delete-movie.use-case.js';

type ResponseBody = {
  movie: any;
};

export const deleteMovieHandler: RequestHandler<any, ResponseBody, any, any> = async (req, res) => {
  const { id } = req.body as any;

  const { movie } = await deleteMovieUseCase(
    {
      id,
    },
    req.context,
  );

  res.send({
    movie,
  });
};
