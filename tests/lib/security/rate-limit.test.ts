import { describe, expect, it } from 'vitest';
import { createRateLimiter } from '@/lib/security/rate-limit';

describe('lib/security/rate-limit', () => {
  it('enforces per-second limits', () => {
    const limiter = createRateLimiter(
      { perSecond: 1, perMinute: 100, perHour: 100 },
      { second: 1000, minute: 60000, hour: 3600000 },
    );
    const clientId = 'client-1';
    const first = limiter(clientId, 0);
    const second = limiter(clientId, 500);
    const third = limiter(clientId, 1001);

    expect(first.limited).toBe(false);
    expect(second.limited).toBe(true);
    expect(second.retryAfterSec).toBeGreaterThan(0);
    expect(third.limited).toBe(false);
  });

  it('enforces per-minute limits', () => {
    const limiter = createRateLimiter(
      { perSecond: 10, perMinute: 2, perHour: 100 },
      { second: 1000, minute: 2000, hour: 3600000 },
    );
    const clientId = 'client-2';
    limiter(clientId, 0);
    limiter(clientId, 500);
    const third = limiter(clientId, 1000);

    expect(third.limited).toBe(true);
  });

  it('enforces per-hour limits', () => {
    const limiter = createRateLimiter(
      { perSecond: 10, perMinute: 10, perHour: 2 },
      { second: 1000, minute: 2000, hour: 3000 },
    );
    const clientId = 'client-3';
    limiter(clientId, 0);
    limiter(clientId, 1000);
    const third = limiter(clientId, 1500);

    expect(third.limited).toBe(true);
  });
});
