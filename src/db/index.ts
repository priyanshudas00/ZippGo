
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from '@/db/schema';

// Mock database for build-time environments
const createMockDb = () => ({
  select: () => ({ 
    from: () => ({ 
      where: () => ({ 
        limit: () => Promise.resolve([]),
        execute: () => Promise.resolve([])
      }),
      execute: () => Promise.resolve([])
    }),
    execute: () => Promise.resolve([])
  }),
  insert: () => ({ 
    values: () => ({ 
      returning: () => Promise.resolve([]),
      execute: () => Promise.resolve({ insertId: 1 })
    }),
    execute: () => Promise.resolve({ insertId: 1 })
  }),
  update: () => ({ 
    set: () => ({ 
      where: () => ({ 
        returning: () => Promise.resolve([]),
        execute: () => Promise.resolve()
      }),
      execute: () => Promise.resolve()
    }),
    execute: () => Promise.resolve()
  }),
  delete: () => ({ 
    where: () => Promise.resolve([]),
    execute: () => Promise.resolve()
  }),
});

// Conditional client creation for different environments
const createDbClient = () => {
  // Force mock during Cloudflare build or when conditions are not met
  if (typeof process === 'undefined' || 
      !process.env.TURSO_CONNECTION_URL || 
      !process.env.TURSO_AUTH_TOKEN ||
      process.env.NODE_ENV === 'test' ||
      process.env.CLOUDFLARE_BUILD === 'true' ||
      typeof window !== 'undefined') {
    console.warn('Using mock database client');
    return null;
  }

  // Only attempt to create real client in runtime server environments
  try {
    // Avoid loading any LibSQL during build
    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'development') {
      return null;
    }
    
    const { createClient } = require('@libsql/client/web');
    return createClient({
      url: process.env.TURSO_CONNECTION_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  } catch (error) {
    console.warn('Failed to create LibSQL client, using mock:', error);
    return null;
  }
};

// Initialize database with fallback to mock
let dbInstance: any = null;

const initializeDb = () => {
  if (dbInstance) return dbInstance;
  
  const client = createDbClient();
  if (client) {
    dbInstance = drizzle(client, { schema });
  } else {
    dbInstance = createMockDb();
  }
  
  return dbInstance;
};

// Export lazy-initialized database
export const db = new Proxy({} as any, {
  get(target, prop) {
    const database = initializeDb();
    return database[prop as keyof typeof database];
  },
});

export type Database = typeof db;