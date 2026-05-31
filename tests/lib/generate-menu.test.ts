import { describe, expect, it } from 'vitest';
import generateMenu, { validateMenuData } from '@/lib/generate-menu';
import getMenuData from '@/lib/menu/get-menu-data';
import { defaultMenuConfig } from '@/lib/menu/menu-config';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';

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
    expect(data.indexes.ingredientIdsByType.fruit.length).toBeGreaterThan(0);
    expect(data.indexes.platIdsByType.dessert.length).toBeGreaterThan(0);
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

  it('generates a menu with a valid theme', () => {
    const menu = generateMenu(undefined, undefined, undefined, 123, { themeId: 'hiver' });

    expect(menu.entree).toHaveLength(defaultMenuConfig.dishCount);
    expect(menu.plat).toHaveLength(defaultMenuConfig.dishCount);
    expect(menu.dessert).toHaveLength(defaultMenuConfig.dishCount);
  });

  it('falls back when the theme is unknown', () => {
    const fallbackMenu = generateMenu(undefined, undefined, undefined, 123, { themeId: 'theme-inconnu' });
    const defaultMenu = generateMenu(undefined, undefined, undefined, 123);

    expect(fallbackMenu).toEqual(defaultMenu);
  });

  it('keeps the display menu format with and without theme', () => {
    const defaultMenu = generateMenu(undefined, undefined, undefined, 123);
    const themedMenu = generateMenu(undefined, undefined, undefined, 123, { themeId: 'ete' });

    expect(Object.keys(themedMenu).sort()).toEqual(Object.keys(defaultMenu).sort());
    expect(Array.isArray(themedMenu.entree)).toBe(true);
    expect(Array.isArray(themedMenu.plat)).toBe(true);
    expect(Array.isArray(themedMenu.dessert)).toBe(true);
  });

  it('rejects partially empty typed indexes before generation', () => {
    const data = getMenuData();
    const invalidData = {
      ...data,
      indexes: {
        ...data.indexes,
        preIdsByType: {
          ...data.indexes.preIdsByType,
          [TypePlat.DESSERT]: [],
        },
      },
    };

    expect(() => validateMenuData(invalidData)).toThrow(
      'Menu data list is empty: preIdsByType.dessert',
    );
  });

  it('rejects partially empty required TypeAliment indexes before generation', () => {
    const data = getMenuData();
    const indexNames = [
      'ingredientIdsByType',
      'adjectifIdsByType',
      'lienIdsByType',
    ] as const;

    for (const indexName of indexNames) {
      const invalidData = {
        ...data,
        indexes: {
          ...data.indexes,
          [indexName]: {
            ...data.indexes[indexName],
            [TypeAliment.FRUIT]: [],
          },
        },
      };

      expect(() => validateMenuData(invalidData)).toThrow(
        `Menu data list is empty: ${indexName}.fruit`,
      );
    }
  });
});
