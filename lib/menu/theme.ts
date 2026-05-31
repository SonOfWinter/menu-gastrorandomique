import { CompiledTheme } from '@/types/data/theme';

export type ThemeContext = {
  theme?: CompiledTheme;
};

export function getRandomTheme(
  themes: readonly CompiledTheme[],
  select: <TItem>(items: TItem[]) => TItem,
): CompiledTheme | undefined {
  if (themes.length === 0) {
    return undefined;
  }

  return select([...themes]);
}

export function filterItemsByTheme<TItem>(
  items: readonly TItem[],
  theme: CompiledTheme | undefined,
): TItem[] {
  if (!theme) {
    return [...items];
  }

  const filteredItems = items.filter((item) => {
    const themeIds = (item as { themeIds?: readonly number[] }).themeIds;
    return !themeIds || themeIds.includes(theme.id);
  });

  return filteredItems.length > 0 ? filteredItems : [...items];
}
