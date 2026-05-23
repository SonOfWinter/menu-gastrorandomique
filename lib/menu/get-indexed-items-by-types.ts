function getIndexedItemsByTypes<TItem, TType extends string>(
  items: readonly TItem[],
  index: Record<TType, number[]>,
  types: readonly TType[],
): TItem[] {
  const seen = new Set<number>();
  const indexedItems: TItem[] = [];

  for (const type of types) {
    for (const id of index[type] ?? []) {
      if (!seen.has(id) && items[id] !== undefined) {
        seen.add(id);
        indexedItems.push(items[id]);
      }
    }
  }

  return indexedItems;
}

export default getIndexedItemsByTypes;
