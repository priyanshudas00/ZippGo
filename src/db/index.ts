
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import * as schema from '@/db/schema';

// Use web client for serverless environments (Cloudflare Pages, Vercel, etc.)
// This avoids native binary dependencies that cause deployment issues
const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });

export type Database = typeof db;