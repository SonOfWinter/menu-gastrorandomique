function getItemsByIds<TItem>(
  items: readonly TItem[],
  ids: readonly number[],
): TItem[] {
  return ids
    .map((id) => items[id])
    .filter((item): item is TItem => item !== undefined);
}

export default getItemsByIds;
