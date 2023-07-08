import { GQL_QueryResolvers } from '@/generated/graphql/index.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/naming-convention
export const _userResolver: GQL_QueryResolvers['users'] = async () => prisma.user.findMany();
