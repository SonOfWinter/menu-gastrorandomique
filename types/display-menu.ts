import { DeepReadonly } from '@/types/common/deep-readonly';
import { Dish } from '@/types/dish';

export type DisplayMenu = DeepReadonly<{
  price: number;
  title: string;
  complement: string;
  entree: Dish;
  plat: Dish;
  dessert: Dish;
}>
