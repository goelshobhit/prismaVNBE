import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type UserRequestBody = {
  name: string;
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Generated<Timestamp>;
  /**
   * We're using Kysely instead of Prisma Client so we have a responsibility to always update this value when the record is inserted/updated.
   */
  updatedAt: Generated<Timestamp>;
};

export type Movie = {
  id: string;
  name: string;
  description: string;
  userId: string;
  directorName: string;
  releaseDate: Generated<Timestamp>;
  createdAt: Generated<Timestamp>;
  /**
   * We're using Kysely instead of Prisma Client so we have a responsibility to always update this value when the record is inserted/updated.
   */
  updatedAt: Generated<Timestamp>;
};

export type DB = {
  User: User;
  Movie: Movie;
};
