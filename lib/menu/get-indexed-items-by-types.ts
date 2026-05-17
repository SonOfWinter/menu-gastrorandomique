function getIndexedItemsByTypes<TItem extends { id: string }, TType extends string>(
  index: Record<TType, TItem[]>,
  types: readonly TType[],
): TItem[] {
  const seen = new Set<string>();
  const items: TItem[] = [];

  for (const type of types) {
    for (const item of index[type] ?? []) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        items.push(item);
      }
    }
  }

  return items;
}

export default getIndexedItemsByTypes;
