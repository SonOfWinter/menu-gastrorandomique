import { describe, expect, it } from 'vitest';
import random from '@/lib/utils/random';

describe('lib/utils/random.ts', () => {
  it('generates integers within bounds', () => {
    const zeroRng = () => 0;
    const highRng = () => 0.9999;
    expect(random(1, 3, false, zeroRng)).toBe(1);
    expect(random(1, 3, false, highRng)).toBe(3);
  });

  it('generates floating point numbers within bounds', () => {
    const midRng = () => 0.5;
    const value = random(1, 3, true, midRng);
    expect(value).toBeGreaterThan(1.99);
    expect(value).toBeLessThan(2.01);
  });
});
