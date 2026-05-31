import { CompiledTheme } from '@/types/data/theme';
import { hasCompatibleMask } from '@/lib/menu/compatibility-mask';

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
    const themeCompatibilityMask = (item as { themeCompatibilityMask?: number }).themeCompatibilityMask ?? 0;
    return themeCompatibilityMask === 0 || hasCompatibleMask(themeCompatibilityMask, theme.compatibilityMask);
  });

  return filteredItems.length > 0 ? filteredItems : [...items];
}
