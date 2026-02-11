import { RandomGenerator } from '@/lib/utils/seeded-rng';

export default function random(
  min: number,
  max: number,
  floating?: boolean,
  rng: RandomGenerator = Math.random,
): number {
  if (floating || min % 1 !== 0 || max % 1 !== 0) {
    const rand = rng();
    return Math.min(min + rand * (max - min + Number.EPSILON), max);
  } else {
    return Math.floor(rng() * (max - min + 1)) + min;
  }
}
