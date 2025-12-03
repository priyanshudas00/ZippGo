# Cloudflare Pages Configuration

## Build Settings
- **Build command**: `npm install --legacy-peer-deps && npm run build:cloudflare`
- **Build output directory**: `.next`
- **Root directory**: `/` (root)

## Environment Variables
Set these in your Cloudflare Pages dashboard:

```
NODE_ENV=production
CLOUDFLARE_BUILD=true
SKIP_LIBSQL_BUILD_CHECK=true
TURSO_CONNECTION_URL=libsql://db-333146d4-5c5e-44d1-84e1-2ae9b69c33d0-orchids.aws-us-west-2.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjQ3MDAxOTIsImlkIjoiNDM0NDdjYmQtMzFlNy00Yzg3LTkxYmEtNGMxYTYyMTYwODUzIiwicmlkIjoiMWMyNWRiYmMtNDUwYS00OGQyLWIwNGYtOWVjOWExNzhmODYyIn0.YTXqFtrq7Id_XreOLnZvrETbcpFQGDpafwd-yN8NJpveEmNjbYKChNEn3fHeUYXuxKVvPe2i1gHgN9-tzrwwDg
BETTER_AUTH_SECRET=OsXo8d/Rt0PCOcrlEw3Pgi9almtWI+2l++Xh22SB7lY=
BETTER_AUTH_URL=https://zippgo-mobility-app.pages.dev
GOOGLE_CLIENT_ID=1061815046640-gd6f5ndvncg1ttbot67ru6dml1dur3nr.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
NEXT_TELEMETRY_DISABLED=1
```

## Deployment Instructions
1. Go to Cloudflare Pages dashboard
2. Update build settings:
   - Build command: `npm install --legacy-peer-deps && npm run build:cloudflare`
   - Build output directory: `.next`
3. Update environment variables as listed above
4. Change NODE_ENV from `development` to `production`
5. Trigger a new deployment