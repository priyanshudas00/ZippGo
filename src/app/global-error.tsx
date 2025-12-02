"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="p-5 text-center">
          <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
