import { describe, expect, it } from 'vitest';
import round from '@/lib/utils/round';

describe('lib/utils/round.ts', () => {
  it('rounds numbers to a precision', () => {
    expect(round(1.2345, 2)).toBe(1.23);
    expect(round(1.235, 2)).toBe(1.24);
    expect(round(10.5)).toBe(11);
  });
});
