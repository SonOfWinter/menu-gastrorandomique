export type WindowState = { count: number; resetAt: number };
export type RateLimitState = {
  second: WindowState;
  minute: WindowState;
  hour: WindowState;
};

export type RateLimitConfig = {
  perSecond: number;
  perMinute: number;
  perHour: number;
};

export type RateLimitResult = {
  limited: boolean;
  retryAfterSec: number;
};

const DEFAULT_WINDOW_MS = {
  second: 1_000,
  minute: 60_000,
  hour: 3_600_000,
};

const getWindowState = (state: WindowState, now: number, windowMs: number): WindowState => {
  if (now > state.resetAt) {
    return { count: 0, resetAt: now + windowMs };
  }
  return state;
};

export const createRateLimiter = (
  limits: RateLimitConfig,
  windowMs = DEFAULT_WINDOW_MS,
) => {
  const rateLimits = new Map<string, RateLimitState>();

  return (clientId: string, now = Date.now()): RateLimitResult => {
    const existing = rateLimits.get(clientId) ?? {
      second: { count: 0, resetAt: now + windowMs.second },
      minute: { count: 0, resetAt: now + windowMs.minute },
      hour: { count: 0, resetAt: now + windowMs.hour },
    };

    const second = getWindowState(existing.second, now, windowMs.second);
    const minute = getWindowState(existing.minute, now, windowMs.minute);
    const hour = getWindowState(existing.hour, now, windowMs.hour);

    second.count += 1;
    minute.count += 1;
    hour.count += 1;

    const exceededSecond = second.count > limits.perSecond;
    const exceededMinute = minute.count > limits.perMinute;
    const exceededHour = hour.count > limits.perHour;

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
};
