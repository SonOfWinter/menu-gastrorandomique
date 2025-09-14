import { Menu } from '@/types/menu';
import random from '@/lib/utils/random';
import round from '@/lib/utils/round';
import { TypePlat } from '@/types/enums/type-plat';
import { DisplayMenu } from '@/types/display-menu';
import getRandom from '@/lib/menu/get-random';
import getMenuData from '@/lib/menu/get-menu-data';
import { generateDish } from '@/lib/menu/generate-dish';

export default function generateMenu(
  count: number = 1,
  inconsistentLevel: number = 0,
): DisplayMenu {
  const data: Menu = getMenuData();
  return {
    price: round(random(30.0, 250.0, true), 2),
    title: getRandom(data.titles).nom,
    complement: getRandom(data.complements).nom,
    entree: Array.from({ length: count }, () => generateDish(data, TypePlat.ENTREE, inconsistentLevel)),
    plat: Array.from({ length: count }, () => generateDish(data, TypePlat.PLAT, inconsistentLevel)),
    dessert: Array.from(
      { length: count },
      () => generateDish(data, TypePlat.DESSERT, inconsistentLevel),
    ),
  };
}






