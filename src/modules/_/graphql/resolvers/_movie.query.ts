import { GQL_QueryResolvers } from '@/generated/graphql/index.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/naming-convention
export const _movieResolver: GQL_QueryResolvers['movies'] = async (_, args) => {
  const KEY = args.orderKey || 'createdAt';

  if (args.filter) {
    return prisma.movie.findMany({
      where: {
        OR: [
          {
            name: {
              contains: args.filter || '',
            },
          },
          {
            description: {
              contains: args.filter || '',
            },
          },
        ],
      },
    });
  }

  return prisma.movie.findMany({
    orderBy: {
      [KEY]: args.orderDirection || 'asc',
    },
    take: args.limit || 0,
    skip: args.offset || 10,
  });
};
