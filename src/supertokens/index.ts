import { superTokensConfig } from '@/config/supertokens.js';
import SuperTokens from 'supertokens-node';
import { SessionRecipe } from './session.recipe.js';

//supertoken config

SuperTokens.init({
  framework: 'express',
  supertokens: {
    connectionURI: 'https://dev-ab581fc11bd411eeaad27d052d9c528a-us-east-1.aws.supertokens.io:3570',
    apiKey: 'Zmqt1UdoLnXYm30mnJTsg0LbvAgRBm',
  },
  appInfo: {
    appName: superTokensConfig.appInfo.appName,
    apiDomain: superTokensConfig.appInfo.apiDomain,
    websiteDomain: superTokensConfig.appInfo.websiteDomain,
    apiBasePath: '/api/v1/auth',
  },
  recipeList: [SessionRecipe],
});
