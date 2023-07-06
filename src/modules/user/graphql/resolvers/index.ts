import { GQL_Resolvers } from '@/generated/graphql/index.js';
import { fullNameResolver } from './full-name.query.js';

const resolvers: GQL_Resolvers = {
  User: {
    name: fullNameResolver,
  },
};
export default resolvers;
