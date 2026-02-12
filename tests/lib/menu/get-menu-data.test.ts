import { describe, expect, it } from 'vitest';
import getMenuData from '@/lib/menu/get-menu-data';

describe('lib/menu/get-menu-data.ts', () => {
  it('returns required menu data lists', () => {
    const data = getMenuData();
    expect(data.adjectifs.length).toBeGreaterThan(0);
    expect(data.ingredients.length).toBeGreaterThan(0);
    expect(data.plats.length).toBeGreaterThan(0);
  });
});
