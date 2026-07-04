import { Dish } from '@/types/dish';
import { ThemePalette } from '@/types/data/theme';

export type DisplayMenu = {
  price: number;
  title: string;
  complement: string;
  theme: {
    nom: string;
    palette: ThemePalette;
  };
  entree: Dish[];
  plat: Dish[];
  dessert: Dish[];
}
