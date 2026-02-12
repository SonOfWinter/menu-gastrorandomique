import { describe, expect, it } from 'vitest';
import intersection from '@/lib/utils/intersection';

describe('lib/utils/intersection.ts', () => {
  it('returns intersections between arrays', () => {
    expect(intersection([1, 2, 3], [2, 4])).toEqual([2]);
    expect(intersection(['a', 'b'], ['c'])).toEqual([]);
  });
});
