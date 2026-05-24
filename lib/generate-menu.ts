import { DisplayMenu } from '@/types/display-menu';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { Menu } from '@/types/menu';
import { TypeAliment } from '@/types/enums/type-aliment';
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

function assertNonEmptyList(label: string, list: readonly unknown[]): void {
  if (list.length === 0) {
    throw new Error(`Menu data list is empty: ${label}`);
  }
}

function assertNonEmptyTypePlatIndex(
  label: string,
  index: Record<TypePlat, readonly unknown[]>,
): void {
  for (const typePlat of Object.values(TypePlat)) {
    assertNonEmptyList(`${label}.${typePlat}`, index[typePlat]);
  }
}

function assertNonEmptyTypeAlimentIndex(
  label: string,
  index: Record<TypeAliment, readonly unknown[]>,
  typeAliments: Iterable<TypeAliment>,
): void {
  for (const typeAliment of typeAliments) {
    assertNonEmptyList(`${label}.${typeAliment}`, index[typeAliment]);
  }
}

function getRequiredTypeAliments(data: Menu): Set<TypeAliment> {
  const typeAliments = new Set<TypeAliment>([TypeAliment.SAUCE]);

  for (const plat of data.plats) {
    for (const typePlat of Object.values(TypePlat)) {
      for (const typeAliment of plat.typeAliments[typePlat]) {
        typeAliments.add(typeAliment);
      }
    }
  }

  return typeAliments;
}

export function validateMenuData(data: Menu): void {
  const requiredLists: Record<string, readonly unknown[]> = {
    titles: data.titles,
    complements: data.complements,
    preSauces: data.preSauces,
    liens: data.liens,
    adjectifs: data.adjectifs,
  };

  for (const [key, list] of Object.entries(requiredLists)) {
    assertNonEmptyList(key, list);
  }

  assertNonEmptyTypePlatIndex('platIdsByType', data.indexes.platIdsByType);
  assertNonEmptyTypePlatIndex('postIdsByType', data.indexes.postIdsByType);
  assertNonEmptyTypePlatIndex('preIdsByType', data.indexes.preIdsByType);
  assertNonEmptyTypePlatIndex('sauceTypeIdsByType', data.indexes.sauceTypeIdsByType);

  const requiredTypeAliments = getRequiredTypeAliments(data);
  assertNonEmptyTypeAlimentIndex('ingredientIdsByType', data.indexes.ingredientIdsByType, requiredTypeAliments);
  assertNonEmptyTypeAlimentIndex('adjectifIdsByType', data.indexes.adjectifIdsByType, requiredTypeAliments);
  assertNonEmptyTypeAlimentIndex('lienIdsByType', data.indexes.lienIdsByType, requiredTypeAliments);
}

export default function generateMenu(
  count: number = defaultMenuConfig.dishCount,
  inconsistentLevel: InconsistentLevel = defaultMenuConfig.inconsistentLevel,
  priceRange: MenuPriceRange = defaultMenuConfig.priceRange,
  seed?: number,
): DisplayMenu {
  resetAlreadyUsed();
  const rng = seed !== undefined ? createSeededRandom(seed) : undefined;
  const data: Menu = getMenuData();
  validateMenuData(data);
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
