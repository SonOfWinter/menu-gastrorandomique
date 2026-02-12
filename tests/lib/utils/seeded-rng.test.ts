import { describe, expect, it } from 'vitest';
import { createSeededRandom } from '@/lib/utils/seeded-rng';

describe('lib/utils/seeded-rng.ts', () => {
  it('generates deterministic sequences with the same seed', () => {
    const first = createSeededRandom(123);
    const second = createSeededRandom(123);
    const valuesA = [first(), first(), first()];
    const valuesB = [second(), second(), second()];
    expect(valuesA).toEqual(valuesB);
    valuesA.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
    });
  });
});
