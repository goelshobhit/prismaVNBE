import { PrismaClient } from 'prisma/prisma-client/index.js';

module.exports = {
  prisma: new PrismaClient(),
};
