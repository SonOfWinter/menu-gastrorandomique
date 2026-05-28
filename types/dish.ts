import { DeepReadonly } from '@/types/common/deep-readonly';
import { DishIcon } from '@/types/dish-icon';

export type Dish = DeepReadonly<{
  main: string;
  second: string;
  sauce: string | null;
  icons: DishIcon[];
}>
