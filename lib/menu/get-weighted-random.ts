import random from '@/lib/utils/random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

export type WeightedItem<TItem> = {
  item: TItem;
  weight: number;
};

export default function getWeightedRandom<TItem>(
  items: readonly WeightedItem<TItem>[],
  rng?: RandomGenerator,
): TItem {
  const totalWeight = items.reduce((sum, weightedItem) => sum + Math.max(weightedItem.weight, 0), 0);
  if (totalWeight <= 0) {
    return items[0].item;
  }

  let cursor = random(0, totalWeight, true, rng);
  for (const weightedItem of items) {
    cursor -= Math.max(weightedItem.weight, 0);
    if (cursor <= 0) {
      return weightedItem.item;
    }
  }

  return items[items.length - 1].item;
}
