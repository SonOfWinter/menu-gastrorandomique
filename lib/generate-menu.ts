import { DisplayMenu } from '@/types/display-menu';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { Menu } from '@/types/menu';
import { TypePlat } from '@/types/enums/type-plat';
import { createSeededRandom } from '@/lib/utils/seeded-rng';
import random from '@/lib/utils/random';
import round from '@/lib/utils/round';
import getRandom from '@/lib/menu/get-random';
import getMenuData from '@/lib/menu/get-menu-data';
import { generateDish } from '@/lib/menu/generate-dish';
import {
  defaultMenuConfig,
  MenuPriceRange,
} from '@/lib/menu/menu-config';
import { resetAlreadyUsed } from '@/lib/ssr-cache';

export default function generateMenu(
  count: number = defaultMenuConfig.dishCount,
  inconsistentLevel: InconsistentLevel = defaultMenuConfig.inconsistentLevel,
  priceRange: MenuPriceRange = defaultMenuConfig.priceRange,
  seed?: number,
): DisplayMenu {
  resetAlreadyUsed();
  const rng = seed !== undefined ? createSeededRandom(seed) : undefined;
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
    () => generateDish(data, TypePlat.ENTREE, inconsistentLevel, rng),
  );
  const plat = Array.from(
    { length: count },
    () => generateDish(data, TypePlat.PLAT, inconsistentLevel, rng),
  );
  const dessert = Array.from(
    { length: count },
    () => generateDish(data, TypePlat.DESSERT, inconsistentLevel, rng),
  );
  return {
    price: round(random(priceRange.min, priceRange.max, true, rng), 2),
    title: getRandom(data.titles, rng).nom,
    complement: getRandom(data.complements, rng).nom,
    entree,
    plat,
    dessert,
  };
}
