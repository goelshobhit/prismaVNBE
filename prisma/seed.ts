import { db } from '@/db/index.js';

async function seed() {
  // Follow https://github.com/kysely-org/kysely/issues/257 for fine-grained transaction API.
  // For now, everything will be inside `execute()`.

  await db
    .transaction()
    .setIsolationLevel('serializable')
    .execute(async () => {
      console.info('Seeding System Roles...');
    });
}
seed()
  .catch(async (err) => {
    console.error(err);
  })
  .finally(async () => {
    db.destroy();
  });
