#!/bin/bash

# Cloudflare Pages build script
echo "Starting build for Cloudflare Pages..."

# Install dependencies with legacy peer deps
echo "Installing dependencies..."
npm install --legacy-peer-deps --no-optional --no-audit --no-fund

# Build the Next.js application
echo "Building Next.js application..."
npm run build

echo "Build completed successfully!"