@echo off
echo Configuring for Cloudflare Pages static deployment...

REM Backup current next.config.ts
copy next.config.ts next.config.dev.ts

echo.
echo Updating next.config.ts for static export...

REM This would require a more complex script or manual editing
echo Please manually update next.config.ts to add:
echo   output: 'export',
echo   trailingSlash: true,
echo   images: { unoptimized: true }

echo.
echo Then run:
echo   npm run build
echo   npx wrangler pages deploy out

pause