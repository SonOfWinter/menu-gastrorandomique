import { describe, expect, it } from 'vitest';
import {
  assertValidThemeScope,
  filterItemsByTheme,
  getRandomTheme,
} from '@/lib/menu/theme';
import { CompiledTheme } from '@/types/data/theme';
import { THEME_BITS, THEME_PALETTES, Theme } from '@/types/enums/theme';

const medievalTheme: CompiledTheme = {
  id: Theme.MEDIEVAL,
  nom: 'Médiéval',
  compatibilityMask: THEME_BITS[Theme.MEDIEVAL],
  palette: THEME_PALETTES[Theme.MEDIEVAL],
};

describe('lib/menu/theme.ts', () => {
  it('selects a random theme', () => {
    const selected = getRandomTheme(
      [
        {
          id: Theme.HIVER,
          nom: 'Hiver',
          compatibilityMask: THEME_BITS[Theme.HIVER],
          palette: THEME_PALETTES[Theme.HIVER],
        },
        medievalTheme,
      ],
      (items) => items[2],
    );

    expect(selected).toEqual(medievalTheme);
  });

  it('can randomly select no theme', () => {
    const selected = getRandomTheme([medievalTheme], (items) => items[0]);

    expect(selected).toBeUndefined();
  });

  it('keeps all items when no theme is selected', () => {
    const items = [
      { id: 1, nom: 'themed', themeCompatibilityMask: THEME_BITS[Theme.HIVER] },
      { id: 2, nom: 'unthemed', unthemedOnly: true },
    ];

    expect(filterItemsByTheme(items, undefined)).toEqual(items);
  });

  it('filters themed items', () => {
    const items = [
      { id: 1, nom: 'nuggets', themeCompatibilityMask: THEME_BITS[Theme.HIVER] | THEME_BITS[Theme.ETE] },
      { id: 2, nom: 'ballottine' },
    ];

    expect(filterItemsByTheme(items, medievalTheme)).toEqual([
      { id: 2, nom: 'ballottine' },
    ]);
  });

  it('falls back to the original list when a theme would empty it', () => {
    const items = [
      { id: 1, nom: 'nuggets', themeCompatibilityMask: THEME_BITS[Theme.HIVER] },
    ];

    expect(filterItemsByTheme(items, medievalTheme)).toEqual(items);
  });

  it('never restores unthemed-only items for a selected theme', () => {
    const items = [
      { id: 1, nom: 'unthemed', unthemedOnly: true },
    ];

    expect(filterItemsByTheme(items, medievalTheme)).toEqual([]);
  });

  it('rejects a theme scope combining themes and unthemedOnly', () => {
    expect(() => assertValidThemeScope(
      {
        themes: [Theme.HIVER],
        unthemedOnly: true,
      },
      'invalid-item',
    )).toThrow(
      'Theme configuration cannot combine themes and unthemedOnly: invalid-item',
    );
  });
});
