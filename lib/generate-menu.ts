import { DisplayMenu } from '@/types/display-menu';
import {
  InconsistentLevel,
  InconsistentLevelSetting,
} from '@/types/inconsistent-level';
import { Menu } from '@/types/menu';
import { TYPE_ALIMENT_BITS, TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';
import { DEFAULT_THEME_PALETTE } from '@/types/enums/theme';
import { createSeededRandom } from '@/lib/utils/seeded-rng';
import random from '@/lib/utils/random';
import round from '@/lib/utils/round';
import getMenuData from '@/lib/menu/get-menu-data';
import { generateDish } from '@/lib/menu/generate-dish';
import {
  defaultMenuConfig,
  MenuPriceRange,
} from '@/lib/menu/menu-config';
import { resetAlreadyUsed } from '@/lib/ssr-cache';
import {
  filterItemsByTheme,
  getRandomTheme,
  ThemeContext,
} from '@/lib/menu/theme';
import getRandom from '@/lib/menu/get-random';
import { getCompatibilityMask } from '@/lib/menu/compatibility-mask';

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

function assertMaskIndexEntries(
  label: string,
  index: Record<number, readonly unknown[]>,
  masks: Iterable<number>,
  requireNonEmpty: boolean = false,
): void {
  for (const mask of new Set(masks)) {
    if (mask === 0) {
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(index, mask)) {
      throw new Error(`Menu data mask index is missing: ${label}.${mask}`);
    }

    if (requireNonEmpty) {
      assertNonEmptyList(`${label}.${mask}`, index[mask]);
    }
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

function getRequiredIngredientMasks(data: Menu): Set<number> {
  const masks = new Set<number>([
    getCompatibilityMask(Object.values(TypeAliment), TYPE_ALIMENT_BITS),
    TYPE_ALIMENT_BITS[TypeAliment.SAUCE],
  ]);

  for (const plat of data.plats) {
    for (const typePlat of Object.values(TypePlat)) {
      masks.add(
        plat.typeAlimentMasks?.[typePlat]
        ?? getCompatibilityMask(plat.typeAliments[typePlat], TYPE_ALIMENT_BITS),
      );
    }
  }

  for (const sauceType of data.sauceTypes) {
    masks.add(
      sauceType.acceptedCompatibilityMask
      ?? getCompatibilityMask(sauceType.compatibleIngredientTypes, TYPE_ALIMENT_BITS),
    );
  }

  return masks;
}

function getIngredientMasks(data: Menu): Set<number> {
  return new Set(
    data.ingredients.map((ingredient) =>
      ingredient.compatibilityMask
      ?? getCompatibilityMask(ingredient.types, TYPE_ALIMENT_BITS),
    ),
  );
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

  assertMaskIndexEntries(
    'ingredientIdsByCompatibilityMask',
    data.indexes.ingredientIdsByCompatibilityMask,
    getRequiredIngredientMasks(data),
    true,
  );
  const ingredientMasks = getIngredientMasks(data);
  assertMaskIndexEntries(
    'adjectifIdsByAcceptedMask',
    data.indexes.adjectifIdsByAcceptedMask,
    ingredientMasks,
  );
  assertMaskIndexEntries(
    'lienIdsByAcceptedMask',
    data.indexes.lienIdsByAcceptedMask,
    ingredientMasks,
  );
}

export default function generateMenu(
  count: number = defaultMenuConfig.dishCount,
  inconsistentLevelSetting: InconsistentLevelSetting = defaultMenuConfig.inconsistentLevel,
  priceRange: MenuPriceRange = defaultMenuConfig.priceRange,
  seed?: number,
  themesEnabled = false,
): DisplayMenu {
  resetAlreadyUsed();
  const rng = seed !== undefined ? createSeededRandom(seed) : undefined;
  const inconsistentLevel: InconsistentLevel = inconsistentLevelSetting === -1
    ? random(0, 20, false, rng) as InconsistentLevel
    : inconsistentLevelSetting;
  const data: Menu = getMenuData();
  validateMenuData(data);
  const themeContext: ThemeContext = {
    theme: themesEnabled
      ? getRandomTheme(data.themes, (items) => getRandom(items, rng))
      : undefined,
  };
  const entree = Array.from(
    { length: count },
    () => generateDish(data, TypePlat.ENTREE, inconsistentLevel, rng, themeContext),
  );
  const plat = Array.from(
    { length: count },
    () => generateDish(data, TypePlat.PLAT, inconsistentLevel, rng, themeContext),
  );
  const dessert = Array.from(
    { length: count },
    () => generateDish(data, TypePlat.DESSERT, inconsistentLevel, rng, themeContext),
  );
  return {
    price: round(random(priceRange.min, priceRange.max, true, rng), 2),
    title: getRandom(filterItemsByTheme(data.titles, themeContext.theme), rng).nom,
    complement: getRandom(filterItemsByTheme(data.complements, themeContext.theme), rng).nom,
    theme: {
      nom: themeContext.theme?.nom ?? 'Sans thème',
      palette: themeContext.theme?.palette ?? DEFAULT_THEME_PALETTE,
    },
    entree,
    plat,
    dessert,
  };
}
