
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from '@/db/schema';

// Create client only in runtime, not during build
let client: any = null;

// Lazy client initialization to avoid build-time issues
const getClient = () => {
  if (!client && typeof window === 'undefined' && process.env.TURSO_CONNECTION_URL) {
    try {
      // Dynamic import to avoid build-time loading
      const { createClient } = require('@libsql/client/web');
      client = createClient({
        url: process.env.TURSO_CONNECTION_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN!,
      });
    } catch (error) {
      console.warn('LibSQL client not available during build:', error);
      return null;
    }
  }
  return client;
};

// Mock database for build-time
const mockDb = {
  select: () => ({ from: () => ({ where: () => ({ limit: () => [] }) }) }),
  insert: () => ({ values: () => ({ returning: () => [] }) }),
  update: () => ({ set: () => ({ where: () => ({ returning: () => [] }) }) }),
  delete: () => ({ where: () => [] }),
} as any;

export const db = typeof window !== 'undefined' || !process.env.NODE_ENV 
  ? mockDb 
  : getClient() 
    ? drizzle(getClient()!, { schema }) 
    : mockDb;

export type Database = typeof db;