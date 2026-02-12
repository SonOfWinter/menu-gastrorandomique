import { describe, expect, it } from 'vitest';
import generateMenu from '@/lib/generate-menu';
import getMenuData from '@/lib/menu/get-menu-data';
import { defaultMenuConfig } from '@/lib/menu/menu-config';

describe('lib/generate-menu.ts', () => {
  it('exposes a default menu config', () => {
    expect(defaultMenuConfig.dishCount).toBe(3);
    expect(defaultMenuConfig.inconsistentLevel).toBe(0);
    expect(defaultMenuConfig.priceRange.min).toBeLessThan(
      defaultMenuConfig.priceRange.max,
    );
  });

  it('returns menu data lists', () => {
    const data = getMenuData();
    expect(data.ingredients.length).toBeGreaterThan(0);
    expect(data.plats.length).toBeGreaterThan(0);
    expect(data.titles.length).toBeGreaterThan(0);
  });

  it('generates a menu within the expected shape', () => {
    const menu = generateMenu(undefined, undefined, undefined, 123);
    expect(menu.entree).toHaveLength(defaultMenuConfig.dishCount);
    expect(menu.plat).toHaveLength(defaultMenuConfig.dishCount);
    expect(menu.dessert).toHaveLength(defaultMenuConfig.dishCount);
    expect(menu.price).toBeGreaterThanOrEqual(defaultMenuConfig.priceRange.min);
    expect(menu.price).toBeLessThanOrEqual(defaultMenuConfig.priceRange.max);
    expect(menu.title.length).toBeGreaterThan(0);
    expect(menu.complement.length).toBeGreaterThan(0);
  });
});
