# Google OAuth Setup Guide

This guide will help you set up Google OAuth authentication for your Zippgo application.

## Prerequisites

- A Google Cloud Platform account
- Access to Google Cloud Console

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your project ID for future reference

## Step 2: Enable Google APIs

1. In the Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Google+ API" and enable it
3. Also enable "People API" (recommended for profile information)

## Step 3: Create OAuth 2.0 Credentials

1. Go to **APIs & Services** > **Credentials**
2. Click **+ CREATE CREDENTIALS** > **OAuth client ID**
3. Choose **Web application** as the application type
4. Set up the OAuth consent screen if prompted:
   - Add your app name
   - Add your email address
   - Add authorized domains (e.g., localhost for development)

## Step 4: Configure OAuth Client

1. **Authorized JavaScript origins:**
   - For development: `http://localhost:3000`
   - For production: `https://yourdomain.com`

2. **Authorized redirect URIs:**
   - For development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://yourdomain.com/api/auth/callback/google`

3. Click **Create** and copy your:
   - Client ID
   - Client Secret

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update your `.env.local` file with your Google OAuth credentials:
   ```env
   GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the login or register page
3. Click "Continue with Google" or "Sign up with Google"
4. Complete the OAuth flow

## OAuth Consent Screen Configuration

For production deployment, you'll need to configure the OAuth consent screen:

1. Go to **APIs & Services** > **OAuth consent screen**
2. Choose **External** user type (unless you have Google Workspace)
3. Fill in the required information:
   - App name
   - User support email
   - Developer contact information
4. Add scopes (basic profile information is usually sufficient)
5. Add test users for testing (not required for production)

## Security Considerations

- Never commit your actual Google OAuth credentials to version control
- Use different OAuth clients for development, staging, and production
- Regularly rotate your client secrets
- Monitor OAuth usage in Google Cloud Console
- Set up proper error handling for OAuth failures

## Troubleshooting

### Common Issues:

1. **"redirect_uri_mismatch" error:**
   - Check that your redirect URI exactly matches the one configured in Google Cloud Console
   - Ensure you're using the correct protocol (http vs https)

2. **"invalid_client" error:**
   - Verify your Client ID and Client Secret are correct
   - Check that the OAuth client is enabled

3. **"access_denied" error:**
   - User cancelled the OAuth flow
   - Check OAuth consent screen configuration

### Debug Mode:

You can enable debug logging by setting:
```env
DEBUG=better-auth:*
```

This will provide detailed logs about the authentication process.

## Production Deployment

When deploying to production:

1. Update your environment variables with production values
2. Add your production domain to authorized origins and redirect URIs
3. Complete the OAuth app verification process if required by Google
4. Test the OAuth flow thoroughly in the production environment

## Support

For issues related to:
- Better Auth: [Better Auth Documentation](https://www.better-auth.com)
- Google OAuth: [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)