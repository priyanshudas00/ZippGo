# Cloudflare Pages Configuration Guide

⚠️ **CRITICAL**: Build output directory MUST be `/next` (configured in next.config.ts)

This guide provides complete setup instructions for deploying the ZippGo mobility application to Cloudflare Pages.

## ✅ Fixed Issues
- LibSQL native binary compatibility issues resolved
- Database client configured with web-only imports and build-time mocking
- CSS parsing errors from Tailwind v4 variables fixed
- Build output directory configuration corrected
- Custom build script handles Cloudflare-specific environment setup

## 🚀 Deployment Steps

### 1. Build Settings
Configure these in your Cloudflare Pages project settings:

- **Build command**: `npm install --legacy-peer-deps && npm run build:cloudflare`
- **Build output directory**: `/next`
- **Root directory**: `/` (leave empty)
- **Node.js version**: `20.18.1` (automatic)

### 2. Environment Variables
Add ALL these variables in your Cloudflare Pages dashboard:

```
NODE_ENV=production
CLOUDFLARE_BUILD=true
SKIP_LIBSQL_BUILD_CHECK=true
TURSO_CONNECTION_URL=libsql://db-333146d4-5c5e-44d1-84e1-2ae9b69c33d0-orchids.aws-us-west-2.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjQ3MDAxOTIsImlkIjoiNDM0NDdjYmQtMzFlNy00Yzg3LTkxYmEtNGMxYTYyMTYwODUzIiwicmlkIjoiMWMyNWRiYmMtNDUwYS00OGQyLWIwNGYtOWVjOWExNzhmODYyIn0.YTXqFtrq7Id_XreOLnZvrETbcpFQGDpafwd-yN8NJpveEmNjbYKChNEn3fHeUYXuxKVvPe2i1gHgN9-tzrwwDg
BETTER_AUTH_SECRET=OsXo8d/Rt0PCOcrlEw3Pgi9almtWI+2l++Xh22SB7lY=
BETTER_AUTH_URL=https://your-deployment-url.pages.dev
GOOGLE_CLIENT_ID=1061815046640-gd6f5ndvncg1ttbot67ru6dml1dur3nr.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
NEXT_TELEMETRY_DISABLED=1
```

### 3. Deployment Process
1. Go to your Cloudflare Pages dashboard
2. Navigate to your project's Settings
3. **CRITICAL**: Update **Build command** to: `npm install --legacy-peer-deps && npm run build:cloudflare`
   - **DO NOT use** `--no-optional` flag as it causes dependency resolution issues
4. **CRITICAL**: Set **Build output directory** to: `/next`
5. Add all environment variables listed above
6. **CRITICAL**: Ensure `NODE_ENV=production` (not development)
7. Save settings and trigger a new deployment

### 🚨 Common Issues & Fixes
- **Module resolution errors**: Ensure build command does NOT include `--no-optional`
- **Missing dependencies**: Cloudflare should install ~1800+ packages, not ~600
- **UI component not found**: Usually caused by incomplete dependency installation
- **Build output directory**: MUST be `/next` as configured in next.config.ts
- **Old commit deployed**: Trigger new deployment to get latest fixes

## 🔧 Technical Details
- **Database**: LibSQL web client with build-time mocking to avoid native binaries
- **Build Script**: Custom `scripts/build-cloudflare.js` sets proper environment flags
- **CSS**: Migrated from Tailwind v4 to v3.4.0 for stability
- **Output**: Standalone Next.js build optimized for Cloudflare Pages

## ✅ Verification
After deployment, verify:
- All static pages load correctly
- Authentication flow works (login/register)
- Database operations function properly
- 3-step booking system is operational

The application should now deploy successfully to Cloudflare Pages!