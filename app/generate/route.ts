import { NextRequest } from 'next/server';
import generateMenu from '@/lib/generate-menu';
import { DisplayMenu } from '@/types/display-menu';
import { MenuResponse } from '@/types/menu-response';
import { defaultMenuConfig } from '@/lib/menu/menu-config';
import { logSecurityEvent } from '@/lib/security/audit-log';
import { rateLimitConfig } from '@/lib/env';

export const dynamic = 'force-dynamic';

type WindowState = { count: number; resetAt: number };
type RateLimitState = {
  second: WindowState;
  minute: WindowState;
  hour: WindowState;
};

const rateLimits = new Map<string, RateLimitState>();
const WINDOW_MS = {
  second: 1_000,
  minute: 60_000,
  hour: 3_600_000,
};
const LIMITS = {
  second: rateLimitConfig.perSecond,
  minute: rateLimitConfig.perMinute,
  hour: rateLimitConfig.perHour,
};

const getClientId = (request: NextRequest): string => {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.ip ?? 'unknown';
};

const getWindowState = (state: WindowState, now: number, windowMs: number): WindowState => {
  if (now > state.resetAt) {
    return { count: 0, resetAt: now + windowMs };
  }
  return state;
};

const isRateLimited = (clientId: string, now: number): { limited: boolean; retryAfterSec: number } => {
  const existing = rateLimits.get(clientId) ?? {
    second: { count: 0, resetAt: now + WINDOW_MS.second },
    minute: { count: 0, resetAt: now + WINDOW_MS.minute },
    hour: { count: 0, resetAt: now + WINDOW_MS.hour },
  };

  const second = getWindowState(existing.second, now, WINDOW_MS.second);
  const minute = getWindowState(existing.minute, now, WINDOW_MS.minute);
  const hour = getWindowState(existing.hour, now, WINDOW_MS.hour);

  second.count += 1;
  minute.count += 1;
  hour.count += 1;

  const exceededSecond = second.count > LIMITS.second;
  const exceededMinute = minute.count > LIMITS.minute;
  const exceededHour = hour.count > LIMITS.hour;

  const retryAfterMs = Math.max(
    exceededSecond ? second.resetAt - now : 0,
    exceededMinute ? minute.resetAt - now : 0,
    exceededHour ? hour.resetAt - now : 0,
  );

  rateLimits.set(clientId, { second, minute, hour });

  return {
    limited: exceededSecond || exceededMinute || exceededHour,
    retryAfterSec: Math.ceil(retryAfterMs / 1000),
  };
};

export async function GET(request: NextRequest):Promise<Response> {
  const now = Date.now();
  const clientId = getClientId(request);
  const limit = isRateLimited(clientId, now);
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
