import { db } from '@/db/index.js';
// import { faker } from '@faker-js/faker';

// const list = [
//   {
//     id: '77004a9e-b64b-4e6b-b31d-56ae9c5b9549',
//   },
//   {
//     id: '5a7def49-514a-4191-8d40-0a07bbdb0f42',
//   },
//   {
//     id: '688a5b33-2945-4366-b818-564ab4736f4a',
//   },
//   {
//     id: '062c7e19-432c-4f0f-99fc-bdd260106ada',
//   },
// ];

// function get_random() {
//   return list[Math.floor(Math.random() * list.length)];
// }

// const adjectives = [
//   'exciting',
//   'mysterious',
//   'hilarious',
//   'captivating',
//   'thrilling',
//   'heartwarming',
//   'mind-bending',
//   'action-packed',
//   'fantastical',
//   'suspenseful',
// ];
// const nouns = ['adventure', 'journey', 'mystery', 'comedy', 'drama', 'romance', 'fantasy', 'horror', 'sci-fi', 'thriller'];
// const verbs = ['explore', 'discover', 'unravel', 'fight', 'survive', 'escape', 'conquer', 'solve', 'save', 'confront'];
// const movieGenres = ['action', 'adventure', 'comedy', 'drama', 'fantasy', 'horror', 'mystery', 'romance', 'sci-fi', 'thriller'];

// function generateMovieDescription() {
//   let description = '';

//   for (let i = 0; i < 20; i++) {
//     const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
//     const noun = nouns[Math.floor(Math.random() * nouns.length)];
//     const verb = verbs[Math.floor(Math.random() * verbs.length)];

//     description += `${adjective} ${noun} where a group of characters ${verb} to ${generatePlot()} `;
//   }

//   description += `This ${selectGenre()} movie will keep you on the edge of your seat until the very end.`;

//   return description;
// }

// function generatePlot() {
//   const plots = [
//     'uncover a dark secret',
//     'save the world',
//     'find true love',
//     'overcome their fears',
//     'solve a puzzling mystery',
//     'achieve their dreams',
//     'battle against evil forces',
//     'survive against all odds',
//     'outsmart their enemies',
//     'embark on an epic quest',
//   ];
//   return plots[Math.floor(Math.random() * plots.length)];
// }

// function selectGenre() {
//   return movieGenres[Math.floor(Math.random() * movieGenres.length)];
// }

// Example usage
// const movieDescription = generateMovieDescription();

async function seed() {
  // Follow https://github.com/kysely-org/kysely/issues/257 for fine-grained transaction API.
  // For now, everything will be inside `execute()`.

  await db
    .transaction()
    .setIsolationLevel('serializable')
    .execute(async () => {
      console.info('Seeding Movies...');

      // await trx
      //   .insertInto('Movie')
      //   .values({
      //     id: faker.string.uuid(),
      //     name: faker.person.firstName(),
      //     description: movieDescription,
      //     directorName: faker.person.firstName(),
      //     releaseDate: faker.date.anytime(),
      //     userId: get_random().id,
      //   })
      //   .onConflict(
      //     // https://kysely-org.github.io/kysely/classes/InsertQueryBuilder.html#onConflict
      //     (oc) => oc.column('id').doNothing(),
      //   )
      //   .returningAll()
      //   .executeTakeFirst();
    });
}

for (let i = 0; i < 10; i += 1) {
  seed()
    .catch(async (err) => {
      console.error(err);
    })
    .finally(async () => {
      db.destroy();
    });
}
