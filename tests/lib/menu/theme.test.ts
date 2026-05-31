import { describe, expect, it } from 'vitest';
import { filterItemsByTheme, getRandomTheme } from '@/lib/menu/theme';
import { CompiledTheme } from '@/types/data/theme';

const medievalTheme: CompiledTheme = {
  id: 4,
  sourceId: 'f9c3fbb0-fce2-41f3-b97e-f6e496bcd4ec',
  nom: 'Médiéval',
};

describe('lib/menu/theme.ts', () => {
  it('selects a random theme', () => {
    const selected = getRandomTheme(
      [
        { id: 0, sourceId: 'theme-0', nom: 'Hiver' },
        medievalTheme,
      ],
      (items) => items[1],
    );

    expect(selected).toEqual(medievalTheme);
  });

  it('filters themed items', () => {
    const items = [
      { id: 1, nom: 'nuggets', themeIds: [0, 1, 2, 3] },
      { id: 2, nom: 'ballottine' },
    ];

    expect(filterItemsByTheme(items, medievalTheme)).toEqual([
      { id: 2, nom: 'ballottine' },
    ]);
  });

  it('falls back to the original list when a theme would empty it', () => {
    const items = [
      { id: 1, nom: 'nuggets', themeIds: [0, 1, 2, 3] },
    ];

    expect(filterItemsByTheme(items, medievalTheme)).toEqual(items);
  });
});
