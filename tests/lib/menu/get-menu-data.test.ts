import { describe, expect, it } from 'vitest';
import getMenuData from '@/lib/menu/get-menu-data';

describe('lib/menu/get-menu-data.ts', () => {
  it('returns required menu data lists', () => {
    const data = getMenuData();
    expect(data.indexes.adjectifs.length).toBeGreaterThan(0);
    expect(data.indexes.ingredientsByType.fruit.length).toBeGreaterThan(0);
    expect(data.indexes.platsByType.dessert.length).toBeGreaterThan(0);
    expect(data.indexes.ingredientsByType).toBeDefined();
    expect(data.indexes.platsByType).toBeDefined();
  });
});
