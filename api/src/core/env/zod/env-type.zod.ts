import { z } from 'zod';

export const envSchema = z.object({
  API_PORT: z.string().transform((val) => parseInt(val, 10)),
  API_PREFIX: z.string(),
  DATABASE_URL: z.string(),
});

export type EnvType = z.infer<typeof envSchema>;
