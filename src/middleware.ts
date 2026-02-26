// path: src/middleware.ts
//
// CSP NONCE MIDDLEWARE.
//
// Generates a unique nonce per request and sets it in:
//   1. x-nonce request header → layout.tsx reads this
//   2. Content-Security-Policy response header → browser enforces
//
// Why not keep CSP in nginx?
//   Inline scripts (our theme script + Next.js hydration) need
//   nonces. Nonces must be unique per request. Nginx can't
//   generate them. Next.js middleware can.
//
// 'strict-dynamic' means any script loaded BY a nonced script
// is automatically trusted — so Next.js chunk loading works
// without listing every chunk URL.
//
// ═══════════════════════════════════════════════════════════════

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'self'",
  ].join("; ");

  // Pass nonce to layout.tsx via request header
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Set CSP on response — browser enforces this
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    // Run on all pages, skip static assets
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
