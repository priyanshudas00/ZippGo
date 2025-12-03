
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from '@/db/schema';

// Conditional client creation for different environments
const createDbClient = () => {
  // During build time or when environment variables are missing
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (!process.env.TURSO_CONNECTION_URL || !process.env.TURSO_AUTH_TOKEN) {
    console.warn('Database credentials not found');
    return null;
  }

  try {
    // Use dynamic import to avoid loading during static generation
    const { createClient } = require('@libsql/client/web');
    return createClient({
      url: process.env.TURSO_CONNECTION_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  } catch (error) {
    console.warn('Failed to create LibSQL client:', error);
    return null;
  }
};

const client = createDbClient();

// Export database or mock based on client availability
export const db = client ? drizzle(client, { schema }) : {
  select: () => ({ from: () => ({ where: () => ({ limit: () => Promise.resolve([]) }) }) }),
  insert: () => ({ values: () => ({ returning: () => Promise.resolve([]) }) }),
  update: () => ({ set: () => ({ where: () => ({ returning: () => Promise.resolve([]) }) }) }),
  delete: () => ({ where: () => Promise.resolve([]) }),
} as any;

export type Database = typeof db;