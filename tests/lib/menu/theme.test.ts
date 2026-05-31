import { describe, expect, it } from 'vitest';
import { filterItemsByTheme, getRandomTheme } from '@/lib/menu/theme';
import { CompiledTheme } from '@/types/data/theme';
import { THEME_BITS, Theme } from '@/types/enums/theme';

const medievalTheme: CompiledTheme = {
  id: Theme.MEDIEVAL,
  nom: 'Médiéval',
  compatibilityMask: THEME_BITS[Theme.MEDIEVAL],
};

describe('lib/menu/theme.ts', () => {
  it('selects a random theme', () => {
    const selected = getRandomTheme(
      [
        {
          id: Theme.HIVER,
          nom: 'Hiver',
          compatibilityMask: THEME_BITS[Theme.HIVER],
        },
        medievalTheme,
      ],
      (items) => items[1],
    );

    expect(selected).toEqual(medievalTheme);
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
});
