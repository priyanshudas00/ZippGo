import { auth } from "@/lib/auth";

import { toNextJsHandler } from "better-auth/next-js";

// Configure for Cloudflare Workers
export const runtime = 'edge';

export const { POST, GET } = toNextJsHandler(auth);