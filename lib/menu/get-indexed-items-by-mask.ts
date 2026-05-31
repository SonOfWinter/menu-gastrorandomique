function getIndexedItemsByMask<TItem>(
  items: readonly TItem[],
  index: Record<number, number[]>,
  mask: number,
): TItem[] {
  return (index[mask] ?? [])
    .map((id) => items[id])
    .filter((item): item is TItem => item !== undefined);
}

export default getIndexedItemsByMask;
