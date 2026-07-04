import { describe, expect, it } from 'vitest';
import getMenuData from '@/lib/menu/get-menu-data';
import { getCompatibilityMask, hasCompatibleMask } from '@/lib/menu/compatibility-mask';
import { TYPE_ALIMENT_BITS, TypeAliment } from '@/types/enums/type-aliment';
import { TYPE_PLAT_BITS, TypePlat } from '@/types/enums/type-plat';
import { THEME_BITS, THEME_PALETTES, Theme } from '@/types/enums/theme';

describe('generated menu data', () => {
  it('contains generated compatibility masks', () => {
    const data = getMenuData();
    const ingredient = data.ingredients[0];
    const plat = data.plats[0];

    expect(ingredient.compatibilityMask).toBe(getCompatibilityMask(ingredient.types, TYPE_ALIMENT_BITS));
    expect(plat.compatibilityMask).toBe(getCompatibilityMask(plat.types, TYPE_PLAT_BITS));
    expect(plat.typeAlimentMasks?.[TypePlat.DESSERT]).toBe(
      getCompatibilityMask(plat.typeAliments[TypePlat.DESSERT], TYPE_ALIMENT_BITS),
    );
  });

  it('contains useful generated mask indexes', () => {
    const data = getMenuData();
    const fruitIngredientIds = data.indexes.ingredientIdsByCompatibilityMask[TYPE_ALIMENT_BITS[TypeAliment.FRUIT]];

    expect(fruitIngredientIds.length).toBeGreaterThan(0);
    expect(fruitIngredientIds.every((id) =>
      hasCompatibleMask(data.ingredients[id].compatibilityMask ?? 0, TYPE_ALIMENT_BITS[TypeAliment.FRUIT]),
    )).toBe(true);
    expect(data.indexes.ingredientIdsByCompatibilityMask[0]).toBeUndefined();
  });

  it('contains compiled themes', () => {
    const data = getMenuData();
    const theme = data.themes.find((item) => item.nom === 'Hiver');

    expect(theme?.nom).toBe('Hiver');
    expect(theme?.id).toBe(Theme.HIVER);
    expect(theme?.compatibilityMask).toBe(THEME_BITS[Theme.HIVER]);
    expect(theme?.palette).toEqual(THEME_PALETTES[Theme.HIVER]);
  });

  it('compiles theme masks on scoped data entries', () => {
    const data = getMenuData();
    const medievalTheme = data.themes.find((item) => item.nom === 'Médiéval');
    const nuggets = data.plats.find((item) => item.nom === 'nuggets');

    expect(medievalTheme).toBeDefined();
    expect(nuggets?.themeCompatibilityMask).toBeDefined();
    const nuggetsMask = nuggets?.themeCompatibilityMask as number;
    const medievalMask = medievalTheme?.compatibilityMask as number;
    expect(nuggetsMask & medievalMask).toBe(0);
  });

  it('preserves unthemed-only scopes', () => {
    const data = getMenuData();
    const title = data.titles.find((item) => item.nom === 'Menu 404 – Saveur Not Found');

    expect(title?.unthemedOnly).toBe(true);
    expect(title?.themeCompatibilityMask).toBeUndefined();
  });
});
