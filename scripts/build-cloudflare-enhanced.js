#!/usr/bin/env node

// Enhanced build script for Cloudflare Pages deployment
// This script ensures proper TypeScript and module resolution

console.log('🚀 Starting Cloudflare Pages build...');

// Set environment variables
process.env.CLOUDFLARE_BUILD = 'true';
process.env.NODE_ENV = 'production';
process.env.NEXT_TELEMETRY_DISABLED = '1';

const { execSync } = require('child_process');

try {
    console.log('🔍 Running build environment verification...');
    execSync('node scripts/verify-build.js', { stdio: 'inherit' });

    console.log('📦 Installing TypeScript if missing...');
    try {
        execSync('npx tsc --version', { stdio: 'pipe' });
        console.log('✅ TypeScript available');
    } catch (error) {
        console.log('⚠️  Installing TypeScript...');
        execSync('npm install typescript@^5 --no-save', { stdio: 'inherit' });
    }

    console.log('🏗️  Running Next.js build...');
    execSync('npx next build', {
        stdio: 'inherit',
        env: {
            ...process.env,
            LIBSQL_CLIENT_TYPE: 'web',
            NODE_PATH: 'node_modules',
        }
    });

    console.log('✅ Build completed successfully!');
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}