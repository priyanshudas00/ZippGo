#!/usr/bin/env node

// Build script for Cloudflare Pages deployment
// This script ensures the build process avoids native dependencies

console.log('Starting Cloudflare Pages build...');

// Set environment variable to signal we're in a Cloudflare build
process.env.CLOUDFLARE_BUILD = 'true';
process.env.NODE_ENV = 'production';

// Run the build
const { execSync } = require('child_process');

try {
    console.log('Running build environment verification...');
    execSync('node scripts/verify-build.js', { stdio: 'inherit' });

    console.log('Running Next.js build...');
    execSync('npx next build', {
        stdio: 'inherit',
        env: {
            ...process.env,
            // Disable problematic features during build
            NEXT_TELEMETRY_DISABLED: '1',
            // Use web client only
            LIBSQL_CLIENT_TYPE: 'web',
            // Ensure proper module resolution
            NODE_PATH: 'node_modules',
        }
    });

    console.log('Build completed successfully!');
} catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
}