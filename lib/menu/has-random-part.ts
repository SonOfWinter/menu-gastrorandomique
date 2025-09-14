import random from '@/lib/utils/random';

const hasRandomPart = (chance: number = 3): boolean => {
  return random(1, chance) === chance;
};

export default hasRandomPart;
