import { asyncHandler } from '@/utils/index.js';
import express from 'express';

import { createUserHandler } from './handlers/create-user.handler.js';

const router = express.Router();

router.post('/api/v1/users', asyncHandler(createUserHandler));
router.post('/api/v1/user', asyncHandler(createUserHandler));

export const userRouter = router;
