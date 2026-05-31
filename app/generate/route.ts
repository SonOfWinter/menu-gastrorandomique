import { NextRequest } from 'next/server';
import generateMenu from '@/lib/generate-menu';
import { DisplayMenu } from '@/types/display-menu';
import { MenuResponse } from '@/types/menu-response';
import { defaultMenuConfig } from '@/lib/menu/menu-config';
import { logSecurityEvent } from '@/lib/security/audit-log';
import { rateLimitConfig } from '@/lib/env';
import { createRateLimiter } from '@/lib/security/rate-limit';

export const dynamic = 'force-dynamic';

const rateLimiter = createRateLimiter({
  perSecond: rateLimitConfig.perSecond,
  perMinute: rateLimitConfig.perMinute,
  perHour: rateLimitConfig.perHour,
});

const getClientId = (request: NextRequest): string => {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return 'unknown';
};

export async function GET(request: NextRequest):Promise<Response> {
  const now = Date.now();
  const clientId = getClientId(request);
  const limit = rateLimiter(clientId, now);
  if (limit.limited) {
    logSecurityEvent({
      action: 'rate_limit',
      detail: 'generate',
      clientId,
    });
    return Response.json(
      { error: 'rate_limit' },
      {
        status: 429,
        headers: {
          'Retry-After': String(limit.retryAfterSec),
        },
      },
    );
  }
  const seedParam = request.nextUrl.searchParams.get('seed');
  const parsedSeed = seedParam ? Number.parseInt(seedParam, 10) : NaN;
  const seed = Number.isFinite(parsedSeed) ? parsedSeed : undefined;
  const menu:DisplayMenu = generateMenu(
    defaultMenuConfig.dishCount,
    defaultMenuConfig.inconsistentLevel,
    defaultMenuConfig.priceRange,
    seed,
  );
  const response: MenuResponse = { menu: menu };
  return Response.json(response);
}
