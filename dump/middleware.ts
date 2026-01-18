import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const viewCookie = request.cookies.get('view');
  const inconsistentCookie = request.cookies.get('inconsistent');

  const response = NextResponse.next();

  if (!inconsistentCookie) {
    // Set the default inconsistent level to 0 if not set
    response.cookies.set('inconsistent', '0');
  }

  const viewCount = viewCookie ? viewCookie.value : '0';
  response.cookies.set('view', (Number.parseInt(viewCount) + 1).toString());

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};
