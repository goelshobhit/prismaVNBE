import cors, { CorsOptions } from 'cors';
import { RequestHandler } from 'express';
import SuperTokens from 'supertokens-node';

export const corsMiddleware = (): RequestHandler => {
  // Refer to the docs on what works for your use cases. https://github.com/expressjs/cors#readme

  const corsOptions: CorsOptions = {
    allowedHeaders: ['content-type', ...SuperTokens.getAllCORSHeaders()],
    credentials: true,
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  return cors(corsOptions);
};
