import { describe, expect, it } from 'vitest';
import generateMenu, { validateMenuData } from '@/lib/generate-menu';
import getMenuData from '@/lib/menu/get-menu-data';
import { defaultMenuConfig } from '@/lib/menu/menu-config';
import { TYPE_ALIMENT_BITS, TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';
import { DEFAULT_THEME_PALETTE } from '@/types/enums/theme';
import { getCompatibilityMask } from '@/lib/menu/compatibility-mask';

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
    expect(menu.theme.nom).toBe('Sans thème');
    expect(menu.theme.palette).toEqual(DEFAULT_THEME_PALETTE);
  });

  it('resolves random inconsistency deterministically when level is random', () => {
    const first = generateMenu(undefined, -1, undefined, 123);
    const second = generateMenu(undefined, -1, undefined, 123);

    expect(first).toEqual(second);
  });

  it('disables themes by default', () => {
    const menu = generateMenu(undefined, undefined, undefined, 0);

    expect(menu.theme.nom).toBe('Sans thème');
    expect(menu.theme.palette).toEqual(DEFAULT_THEME_PALETTE);
  });

  it('selects a random theme deterministically when themes are enabled', () => {
    const first = generateMenu(undefined, undefined, undefined, 0, true);
    const second = generateMenu(undefined, undefined, undefined, 0, true);

    expect(first.theme).toEqual(second.theme);
    expect(first.theme.nom).not.toBe('Sans thème');
    expect(first.theme.palette.primary).toMatch(/^#[0-9A-F]{6}$/);
  });

  it('keeps the display menu format with a theme', () => {
    const themedMenu = generateMenu(undefined, undefined, undefined, 0, true);

    expect(Object.keys(themedMenu).sort()).toEqual([
      'complement',
      'dessert',
      'entree',
      'plat',
      'price',
      'theme',
      'title',
    ]);
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

  it('rejects missing required mask indexes before generation', () => {
    const data = getMenuData();
    const allIngredientTypesMask = getCompatibilityMask(
      Object.values(TypeAliment),
      TYPE_ALIMENT_BITS,
    );
    const ingredientMask = data.ingredients[0].compatibilityMask as number;
    const indexCases = [
      {
        name: 'ingredientIdsByCompatibilityMask',
        mask: allIngredientTypesMask,
      },
      {
        name: 'adjectifIdsByAcceptedMask',
        mask: ingredientMask,
      },
      {
        name: 'lienIdsByAcceptedMask',
        mask: ingredientMask,
      },
    ] as const;

    for (const { name, mask } of indexCases) {
      const { [mask]: omitted, ...incompleteIndex } = data.indexes[name];
      expect(omitted).toBeDefined();

      const invalidData = {
        ...data,
        indexes: {
          ...data.indexes,
          [name]: incompleteIndex,
        },
      };

      expect(() => validateMenuData(invalidData)).toThrow(
        `Menu data mask index is missing: ${name}.${mask}`,
      );
    }
  });

  it('rejects an empty required ingredient mask index before generation', () => {
    const data = getMenuData();
    const allIngredientTypesMask = getCompatibilityMask(
      Object.values(TypeAliment),
      TYPE_ALIMENT_BITS,
    );
    const invalidData = {
      ...data,
      indexes: {
        ...data.indexes,
        ingredientIdsByCompatibilityMask: {
          ...data.indexes.ingredientIdsByCompatibilityMask,
          [allIngredientTypesMask]: [],
        },
      },
    };

    expect(() => validateMenuData(invalidData)).toThrow(
      `Menu data list is empty: ingredientIdsByCompatibilityMask.${allIngredientTypesMask}`,
    );
  });
});
