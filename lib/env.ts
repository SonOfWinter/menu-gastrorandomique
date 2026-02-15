const parsePositiveInt = (name: string, fallback: number): number => {
  const raw = process.env[name];
  if (raw === undefined || raw === '') {
    return fallback;
  }
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Invalid ${name} value`);
  }
  return parsed;
};

export const rateLimitConfig = {
  perSecond: parsePositiveInt('RATE_LIMIT_PER_SECOND', 1),
  perMinute: parsePositiveInt('RATE_LIMIT_PER_MINUTE', 30),
  perHour: parsePositiveInt('RATE_LIMIT_PER_HOUR', 60),
};
