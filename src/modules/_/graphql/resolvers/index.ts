import { GQL_Resolvers } from '@/generated/graphql/index.js';
import { nodeInterfaceResolveType } from './node.interface.js';
import { _dateResolver } from './_date.query.js';
import { _datetimeResolver } from './_datetime.query.js';
import { _timeResolver } from './_time.query.js';
import { _userResolver } from './_user.query.js';
import { _movieResolver } from './_movie.query.js';

const resolvers: GQL_Resolvers = {
  Node: {
    __resolveType: nodeInterfaceResolveType,
  },
  Query: {
    _date: _dateResolver,
    _datetime: _datetimeResolver,
    _time: _timeResolver,
    users: _userResolver,
    movies: _movieResolver,
  },
};
export default resolvers;
