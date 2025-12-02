# INSTANT DEPLOYMENT - USE VERCEL

The simplest and most reliable deployment for Next.js apps is Vercel:

## Quick Deploy (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy directly
npx vercel --prod
```

## Manual Vercel Setup

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import the repository: `priyanshudas00/ZippGo`
4. Vercel will auto-detect Next.js settings
5. Add environment variables:

```
TURSO_CONNECTION_URL=libsql://db-333146d4-5c5e-44d1-84e1-2ae9b69c33d0-orchids.aws-us-west-2.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjQ3MDAxOTIsImlkIjoiNDM0NDdjYmQtMzFlNy00Yzg3LTkxYmEtNGMxYTYyMTYwODUzIiwicmlkIjoiMWMyNWRiYmMtNDUwYS00OGQyLWIwNGYtOWVjOWExNzhmODYyIn0.YTXqFtrq7Id_XreOLnZvrETbcpFQGDpafwd-yN8NJpveEmNjbYKChNEn3fHeUYXuxKVvPe2i1gHgN9-tzrwwDg
BETTER_AUTH_SECRET=OsXo8d/Rt0PCOcrlEw3Pgi9almtWI+2l++Xh22SB7lY=
GOOGLE_CLIENT_ID=1061815046640-gd6f5ndvncg1ttbot67ru6dml1dur3nr.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

6. Deploy!

## Why Vercel?

- ✅ Zero configuration for Next.js
- ✅ Handles API routes automatically
- ✅ Works with all Node.js versions
- ✅ Automatic preview deployments
- ✅ Built by the Next.js team
- ✅ No dependency conflicts

Your app will be live at: `https://your-project-name.vercel.app`