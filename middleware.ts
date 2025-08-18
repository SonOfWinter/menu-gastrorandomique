import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('view');
  const response = NextResponse.next()
  const viewCount = cookie ? cookie.value : '0';
  response.cookies.set('view', (Number.parseInt(viewCount) + 1).toString());
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}
