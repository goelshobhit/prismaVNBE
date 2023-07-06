import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const EnvironmentConfigSchema = z.object({
  NODE_ENV: z.coerce.string().toLowerCase().default('development'),
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z
    .string()
    .nonempty()
    .default(
      () =>
        'postgres://goelshobhit34:GHRxv62COewT@ep-frosty-haze-347814-pooler.us-east-2.aws.neon.tech/movie?pgbouncer=true&connect_timeout=10&sslmode=require',
    ),
});
type EnvironmentConfig = z.infer<typeof EnvironmentConfigSchema> & { isProduction: boolean };

export const env: EnvironmentConfig = {
  ...EnvironmentConfigSchema.parse(process.env),
  get isProduction() {
    return this.NODE_ENV === 'production';
  },
} as const;
