import { db } from '@/db/index.js';

async function insertUser(user: any) {
  const users = await db.insertInto('User').values(user).returningAll().executeTakeFirstOrThrow();

  return users;
}

export const userService = {
  insertUser,
};
