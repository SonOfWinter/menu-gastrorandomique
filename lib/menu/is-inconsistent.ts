import random from '@/lib/utils/random';

const isInconsistent = (inconsistentLevel: number): boolean => {
  return inconsistentLevel > 0 && random(1, 20) <= inconsistentLevel;
};
export default isInconsistent;
