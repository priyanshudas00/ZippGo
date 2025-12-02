# DEPLOYMENT QUICK FIX

## The Issue
Cloudflare Pages build is failing due to dependency conflicts with better-auth versions.

## Solution 1: Environment Variables (Easiest)
Add these environment variables in Cloudflare Pages Dashboard:

```
NODE_VERSION = 18.17.0
NPM_CONFIG_LEGACY_PEER_DEPS = true
NPM_FLAGS = --legacy-peer-deps
```

## Solution 2: Updated Build Command
In Cloudflare Pages build settings, use:

**Build command:** `npm install --legacy-peer-deps --no-optional && npm run build`
**Build output directory:** `.next`

## Solution 3: Alternative Platforms
If Cloudflare Pages continues to have issues:

### Vercel (Recommended - Zero Config)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### Railway
1. Connect GitHub repository to Railway
2. Auto-deploy with database support

## Environment Variables Needed
Copy these from your .env file to the deployment platform:

```
TURSO_CONNECTION_URL=libsql://db-333146d4-5c5e-44d1-84e1-2ae9b69c33d0-orchids.aws-us-west-2.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjQ3MDAxOTIsImlkIjoiNDM0NDdjYmQtMzFlNy00Yzg3LTkxYmEtNGMxYTYyMTYwODUzIiwicmlkIjoiMWMyNWRiYmMtNDUwYS00OGQyLWIwNGYtOWVjOWExNzhmODYyIn0.YTXqFtrq7Id_XreOLnZvrETbcpFQGDpafwd-yN8NJpveEmNjbYKChNEn3fHeUYXuxKVvPe2i1gHgN9-tzrwwDg
BETTER_AUTH_SECRET=OsXo8d/Rt0PCOcrlEw3Pgi9almtWI+2l++Xh22SB7lY=
GOOGLE_CLIENT_ID=1061815046640-gd6f5ndvncg1ttbot67ru6dml1dur3nr.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

## Quick Deploy Commands

### Test locally first:
```bash
npm install --legacy-peer-deps
npm run build
npm start
```

### Deploy to Vercel (easiest):
```bash
npx vercel --prod
```