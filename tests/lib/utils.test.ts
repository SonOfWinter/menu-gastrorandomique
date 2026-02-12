import { describe, expect, it } from 'vitest';
import { cn } from '@/lib/utils';

describe('lib/utils.ts', () => {
  it('merges class names with tailwind merge', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });
});
