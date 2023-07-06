import { RequestHandler } from 'express';
import { MovieUseCase } from '../use-cases/movie.use-case.js';

type ResponseBody = {
  movie: any;
};

export const createMovieHandler: RequestHandler<any, ResponseBody, any, any> = async (req, res) => {
  const { name, description, directorName, releaseDate } = req.body as any;

  const { movie } = await MovieUseCase(
    {
      name,
      description,
      directorName,
      releaseDate,
    },
    req.context,
  );

  res.send({
    movie,
  });
};
