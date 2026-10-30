import { neon } from '@neondatabase/serverless';

let cfEnv: { DATABASE_URL?: string } | undefined;
try {
  const cf = await import('cloudflare:workers');
  cfEnv = cf.env as { DATABASE_URL?: string };
} catch {
  // Not running in Cloudflare Workers runtime
}

export function getSql() {
  const connectionString = process.env.DATABASE_URL || cfEnv?.DATABASE_URL;
  if (!connectionString) throw new Error('Database connection is not configured.');
  return neon(connectionString);
}
