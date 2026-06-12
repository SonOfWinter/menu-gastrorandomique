import { CompiledTheme } from '@/types/data/theme';
import { hasCompatibleMask } from '@/lib/menu/compatibility-mask';
import { Theme } from '@/types/enums/theme';

export type ThemeContext = {
  theme?: CompiledTheme;
};

export function assertValidThemeScope(
  item: {
    themes?: readonly Theme[];
    unthemedOnly?: boolean;
  },
  label: string,
): void {
  if (item.themes && item.unthemedOnly) {
    throw new Error(`Theme configuration cannot combine themes and unthemedOnly: ${label}`);
  }
}

export function getRandomTheme(
  themes: readonly CompiledTheme[],
  select: (items: Array<CompiledTheme | undefined>) => CompiledTheme | undefined,
): CompiledTheme | undefined {
  return select([undefined, ...themes]);
}

export function filterItemsByTheme<TItem>(
  items: readonly TItem[],
  theme: CompiledTheme | undefined,
): TItem[] {
  if (!theme) {
    return [...items];
  }

  const themedEligibleItems = items.filter((item) =>
    !(item as { unthemedOnly?: boolean }).unthemedOnly,
  );
  const filteredItems = themedEligibleItems.filter((item) => {
    const themeCompatibilityMask = (item as { themeCompatibilityMask?: number }).themeCompatibilityMask ?? 0;
    return themeCompatibilityMask === 0 || hasCompatibleMask(themeCompatibilityMask, theme.compatibilityMask);
  });

  return filteredItems.length > 0 ? filteredItems : themedEligibleItems;
}
