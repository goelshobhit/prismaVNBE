import { asyncHandler } from '@/utils/index.js';
import express from 'express';
import { createMovieHandler } from './handlers/movie.handler.js';
import { getMovieHandler } from './handlers/get-movie.handler.js';
import { updateMovieHandler } from './handlers/update-movie.handler.js';
import { deleteMovieHandler } from './handlers/delete-movie.handler.js';

const router = express.Router();

router.post('/api/v1/movie/create', asyncHandler(createMovieHandler));
router.get('/api/v1/movie/get/:id', asyncHandler(getMovieHandler));
router.put('/api/v1/movie/update', asyncHandler(updateMovieHandler));
router.delete('/api/v1/movie/delete', asyncHandler(deleteMovieHandler));

export const moviesRouter = router;
