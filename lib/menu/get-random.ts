import random from '@/lib/utils/random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

const getRandom = <T>(arr: T[], rng?: RandomGenerator): T =>
  arr[random(0, arr.length - 1, false, rng)];

export default getRandom;
