import random from '@/lib/utils/random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

const hasRandomPart = (
  chance: number = 3,
  rng?: RandomGenerator,
): boolean => {
  return random(1, chance, false, rng) === chance;
};

export default hasRandomPart;
