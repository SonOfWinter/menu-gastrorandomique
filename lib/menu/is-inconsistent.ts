import random from '@/lib/utils/random';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

const isInconsistent = (
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
): boolean => {
  return inconsistentLevel > 0 && random(1, 20, false, rng) <= inconsistentLevel;
};
export default isInconsistent;
