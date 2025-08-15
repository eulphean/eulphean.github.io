import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Check if the request is coming from commercial subdomain
  if (hostname.includes('commercial.amaykataria.com')) {
    // Rewrite to the commercial page
    return NextResponse.rewrite(new URL('/commercial', request.url));
  }
  
  // Continue with normal routing for other requests
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};