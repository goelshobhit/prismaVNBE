import { db } from '@/db/index.js';
import { v4 as uuidV4 } from 'uuid';
import { faker } from 'faker';

async function seed() {
  // Follow https://github.com/kysely-org/kysely/issues/257 for fine-grained transaction API.
  // For now, everything will be inside `execute()`.

  await db
    .transaction()
    .setIsolationLevel('serializable')
    .execute(async (trx) => {
      console.info('Seeding System Roles...');
      await trx
        .insertInto('Movie')
        .values({
          id: uuidV4(),
          name: faker,
          description,
          directorName,
          releaseDate,
          userId: 'demo',
        })
        .onConflict(
          // https://kysely-org.github.io/kysely/classes/InsertQueryBuilder.html#onConflict
          (oc) => oc.column('id').doNothing(),
        )
        .returningAll()
        .executeTakeFirst();
    });
}
seed()
  .catch(async (err) => {
    console.error(err);
  })
  .finally(async () => {
    db.destroy();
  });
