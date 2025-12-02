"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuthCallback = () => {
      const error = searchParams.get("error");
      const success = searchParams.get("success");

      if (error) {
        toast.error("Authentication failed. Please try again.");
        router.push("/login");
      } else if (success) {
        toast.success("Successfully signed in with Google!");
        router.push("/user");
      } else {
        // Default redirect for successful OAuth
        router.push("/user");
      }
    };

    // Small delay to ensure the toast shows properly
    const timer = setTimeout(handleAuthCallback, 1000);
    return () => clearTimeout(timer);
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Completing sign in...
        </h2>
        <p className="text-gray-600">
          Please wait while we finish setting up your account.
        </p>
      </div>
    </div>
  );
}