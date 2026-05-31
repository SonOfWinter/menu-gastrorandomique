import getRandom from '@/lib/menu/get-random';
import getWeightedRandom, { WeightedItem } from '@/lib/menu/get-weighted-random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

export default function getThemedRandom<TItem>(
  items: readonly TItem[],
  getWeight: (item: TItem) => number,
  rng?: RandomGenerator,
): TItem {
  const weightedItems: WeightedItem<TItem>[] = items.map((item) => ({
    item,
    weight: getWeight(item),
  }));
  const hasCustomWeight = weightedItems.some((item) => item.weight !== 1);

  return hasCustomWeight
    ? getWeightedRandom(weightedItems, rng)
    : getRandom([...items], rng);
}
