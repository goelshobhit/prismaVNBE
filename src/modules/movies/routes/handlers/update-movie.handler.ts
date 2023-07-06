import { RequestHandler } from 'express';
import { updateMovieUseCase } from '../use-cases/update-movie.use-case.js';

type ResponseBody = {
  movie: any;
};

export const updateMovieHandler: RequestHandler<any, ResponseBody, any, any> = async (req, res) => {
  const { name, id, description, directorName, releaseDate } = req.body as any;

  const { movie } = await updateMovieUseCase(
    {
      name,
      id,
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
