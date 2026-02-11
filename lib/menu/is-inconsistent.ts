import random from '@/lib/utils/random';
import { InconsistentLevel } from '@/types/inconsistent-level';

const isInconsistent = (inconsistentLevel: InconsistentLevel): boolean => {
  return inconsistentLevel > 0 && random(1, 20) <= inconsistentLevel;
};
export default isInconsistent;
