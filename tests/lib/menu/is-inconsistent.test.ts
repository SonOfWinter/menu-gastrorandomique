import { describe, expect, it } from 'vitest';
import isInconsistent from '@/lib/menu/is-inconsistent';

describe('lib/menu/is-inconsistent.ts', () => {
  it('returns false for zero inconsistency', () => {
    expect(isInconsistent(0, () => 0)).toBe(false);
  });

  it('returns true only when rng meets threshold', () => {
    expect(isInconsistent(1, () => 0)).toBe(true);
    expect(isInconsistent(1, () => 0.9999)).toBe(false);
  });
});
