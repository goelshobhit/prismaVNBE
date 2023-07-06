import { z } from 'zod';
import { env } from './environment.js';
import Dashboard from 'supertokens-node/recipe/dashboard/index.js';
import Session from 'supertokens-node/recipe/session/index.js';

const SupertokensConfig = z.object({
  SUPERTOKENS_CONNECTION_URL: z
    .string()
    .nonempty()
    .default(() =>
      env.isProduction ? 'https://dev-ab581fc11bd411eeaad27d052d9c528a-us-east-1.aws.supertokens.io:3570' : 'http://supertokens:3567',
    ),
  SUPERTOKENS_API_KEY: z
    .string()
    .nonempty()
    .default(() => (env.isProduction ? 'Zmqt1UdoLnXYm30mnJTsg0LbvAgRBm' : 'graphql-starter-supertokens-api-key')),

  SUPERTOKENS_APP_NAME: z
    .string()
    .nonempty()
    .default(() => (env.isProduction ? 'Viral Nation!' : 'GraphQL Starter')),
  SUPERTOKENS_API_DOMAIN: z
    .string()
    .nonempty()
    .default(() => 'http://localhost:8080'),
  SUPERTOKENS_WEBSITE_DOMAIN: z
    .string()
    .nonempty()
    .default(() => 'http://localhost:8080'),
});
type SupertokensConfig = z.infer<typeof SupertokensConfig>;

const config = SupertokensConfig.parse(process.env);

export const superTokensConfig = {
  connectionUrl: config.SUPERTOKENS_CONNECTION_URL,
  apiKey: config.SUPERTOKENS_API_KEY,

  appInfo: {
    appName: config.SUPERTOKENS_APP_NAME,
    apiDomain: config.SUPERTOKENS_API_DOMAIN,
    websiteDomain: config.SUPERTOKENS_WEBSITE_DOMAIN,
  },
  recipeList: [
    Session.init({
      getTokenTransferMethod: () => 'header',
    }),
    Dashboard.init(),
  ],
} as const;
