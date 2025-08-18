import { DeepReadonly } from '@/types/common/deep-readonly';

export type Dish = DeepReadonly<{
  main: string;
  second: string;
  sauce?: string;
}>
