"use client";

type ReporterProps = {
  error?: Error & { digest?: string };
  reset?: () => void;
};

export default function ErrorReporter({ error, reset }: ReporterProps) {
  // Return null for non-error cases (SSR safe)
  if (!error) return null;

  // Simple error UI without DOM manipulation
  return (
    <html>
      <body className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-red-600">
              Something went wrong!
            </h1>
            <p className="text-gray-600">
              An unexpected error occurred. Please try refreshing the page.
            </p>
          </div>
          {reset && (
            <button
              onClick={reset}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Try again
            </button>
          )}
          {process.env.NODE_ENV === "development" && error.message && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                Error details
              </summary>
              <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto text-left">
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </body>
    </html>
  );
}
