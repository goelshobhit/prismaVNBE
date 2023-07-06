import { RequestHandler } from 'express';
import { getMovieUseCase } from '../use-cases/get-movie.use-case.js';

type ResponseBody = {
  movie: any;
};

export const getMovieHandler: RequestHandler<any, ResponseBody, any, any> = async (req, res) => {
  const { name } = req.params as any;

  const { movie } = await getMovieUseCase(
    {
      name,
    },
    req.context,
  );

  res.send({
    movie,
  });
};
