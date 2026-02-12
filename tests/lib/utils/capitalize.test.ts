import { describe, expect, it } from 'vitest';
import capitalize from '@/lib/utils/capitalize';

describe('lib/utils/capitalize.ts', () => {
  it('capitalizes strings', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });
});
