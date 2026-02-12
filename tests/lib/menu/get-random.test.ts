import { describe, expect, it } from 'vitest';
import getRandom from '@/lib/menu/get-random';

describe('lib/menu/get-random.ts', () => {
  it('picks a deterministic random element', () => {
    expect(getRandom([1, 2, 3], () => 0)).toBe(1);
    expect(getRandom([1, 2, 3], () => 0.9999)).toBe(3);
  });
});
