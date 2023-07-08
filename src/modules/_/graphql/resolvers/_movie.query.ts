import { GQL_QueryResolvers } from '@/generated/graphql/index.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/naming-convention
export const _movieResolver: GQL_QueryResolvers['movies'] = async () => prisma.movie.findMany();
