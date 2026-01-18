import random from '@/lib/utils/random';

const getRandom = <T>(arr: T[]): T => arr[random(0, arr.length - 1)];

export default getRandom;
