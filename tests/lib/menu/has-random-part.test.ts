import { describe, expect, it } from 'vitest';
import hasRandomPart from '@/lib/menu/has-random-part';

describe('lib/menu/has-random-part.ts', () => {
  it('evaluates random parts with deterministic rng', () => {
    expect(hasRandomPart(3, () => 0)).toBe(false);
    expect(hasRandomPart(3, () => 0.9999)).toBe(true);
  });
});
