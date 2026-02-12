import { describe, expect, it } from 'vitest';
import { defaultMenuConfig } from '@/lib/menu/menu-config';

describe('lib/menu/menu-config.ts', () => {
  it('provides a valid default menu configuration', () => {
    expect(defaultMenuConfig.dishCount).toBeGreaterThan(0);
    expect(defaultMenuConfig.priceRange.min).toBeLessThan(
      defaultMenuConfig.priceRange.max,
    );
  });
});
