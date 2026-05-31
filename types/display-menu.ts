import { Dish } from '@/types/dish';

export type DisplayMenu = {
  price: number;
  title: string;
  complement: string;
  theme: {
    nom: string;
  };
  entree: Dish[];
  plat: Dish[];
  dessert: Dish[];
}
