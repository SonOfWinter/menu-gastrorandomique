import { CompiledTheme, ThemeId } from '@/types/data/theme';

export type ThemeContext = {
  theme?: CompiledTheme;
};

export function getThemeById(
  themes: readonly CompiledTheme[],
  themeId?: ThemeId,
): CompiledTheme | undefined {
  if (!themeId) {
    return undefined;
  }

  return themes.find((theme) => theme.id === themeId);
}

export function getCollectionWeight(
  theme: CompiledTheme | undefined,
  collectionName: keyof Omit<CompiledTheme['weights'], 'typeAlimentMasks' | 'typePlatMasks'>,
  id: number,
): number {
  return theme?.weights[collectionName][id] ?? 1;
}

export function getMaskWeight(
  weights: Partial<Record<number, number>>,
  mask: number | undefined,
): number {
  if (!mask) {
    return 1;
  }

  return Object.entries(weights).reduce((weight, [weightedMask, weightedValue]) => {
    const maskNumber = Number(weightedMask);
    return (mask & maskNumber) !== 0 ? weight * (weightedValue ?? 1) : weight;
  }, 1);
}

export function getTypeAlimentWeight(
  theme: CompiledTheme | undefined,
  mask: number | undefined,
): number {
  return theme ? getMaskWeight(theme.weights.typeAlimentMasks, mask) : 1;
}

export function getTypePlatWeight(
  theme: CompiledTheme | undefined,
  mask: number | undefined,
): number {
  return theme ? getMaskWeight(theme.weights.typePlatMasks, mask) : 1;
}
