export type CompatibilityBitTable<TType extends string> = Record<TType, number>;

export function getCompatibilityMask<TType extends string>(
  types: readonly TType[] | null | undefined,
  bitTable: CompatibilityBitTable<TType>,
): number {
  if (!types || types.length === 0) {
    return 0;
  }

  return types.reduce((mask, type) => mask | bitTable[type], 0);
}

export function hasCompatibleMask(
  itemMask: number,
  requiredMask: number,
): boolean {
  return requiredMask === 0 || (itemMask & requiredMask) !== 0;
}

export function getMaskIndexes<TItem>(
  items: readonly TItem[],
  usefulMasks: readonly number[],
  getItemMask: (item: TItem) => number,
): Record<number, number[]> {
  return Object.fromEntries(
    usefulMasks.map((mask) => [
      mask,
      items
        .map((item, index) => hasCompatibleMask(getItemMask(item), mask) ? index : -1)
        .filter((index) => index !== -1),
    ]),
  );
}
