import { Menu } from '@/types/menu';
import random from '@/lib/utils/random';
import round from '@/lib/utils/round';
import { TypePlat } from '@/types/enums/type-plat';
import { DisplayMenu } from '@/types/display-menu';
import { InconsistentLevel } from '@/types/inconsistent-level';
import getRandom from '@/lib/menu/get-random';
import getMenuData from '@/lib/menu/get-menu-data';
import { generateDish } from '@/lib/menu/generate-dish';

export default function generateMenu(
  count: number = 1,
  inconsistentLevel: InconsistentLevel = 0,
): DisplayMenu {
  const data: Menu = getMenuData();
  const requiredLists: Record<string, unknown[]> = {
    titles: data.titles,
    complements: data.complements,
    plats: data.plats,
    ingredients: data.ingredients,
    adjectifs: data.adjectifs,
    liens: data.liens,
    posts: data.posts,
    pres: data.pres,
    preSauces: data.preSauces,
    sauceTypes: data.sauceTypes,
  };
  for (const [key, list] of Object.entries(requiredLists)) {
    if (!Array.isArray(list) || list.length === 0) {
      throw new Error(`Menu data list is empty: ${key}`);
    }
  }
  const entree = Array.from(
    { length: count },
    () => generateDish(data, TypePlat.ENTREE, inconsistentLevel),
  );
  const plat = Array.from(
    { length: count },
    () => generateDish(data, TypePlat.PLAT, inconsistentLevel),
  );
  const dessert = Array.from(
    { length: count },
    () => generateDish(data, TypePlat.DESSERT, inconsistentLevel),
  );
  return {
    price: round(random(30.0, 250.0, true), 2),
    title: getRandom(data.titles).nom,
    complement: getRandom(data.complements).nom,
    entree,
    plat,
    dessert,
  };
}




