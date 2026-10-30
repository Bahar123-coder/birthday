import { env } from 'cloudflare:workers';
import { neon } from '@neondatabase/serverless';

export function getSql() {
  const connectionString = (env as unknown as { DATABASE_URL?: string }).DATABASE_URL;
  if (!connectionString) throw new Error('Database connection is not configured.');
  return neon(connectionString);
}
