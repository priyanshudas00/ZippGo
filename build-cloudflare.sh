#!/bin/bash

# Build script for Cloudflare Pages
echo "Building for Cloudflare Pages..."

# Build Next.js application
npm run build

echo "Build complete. Ready for Cloudflare Pages deployment."