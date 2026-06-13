import { Menu } from '@/types/menu';
import { Plat } from '@/types/data/plat';
import { TypePlat } from '@/types/enums/type-plat';
import { Ingredient } from '@/types/data/ingredient';
import { TypeAliment } from '@/types/enums/type-aliment';
import { Adjectif } from '@/types/data/adjectif';
import { PreSauce } from '@/types/data/pre-sauce';
import { SauceType } from '@/types/data/sauce-type';
import getAdjectifBasedOnIngredient from '@/lib/menu/get-adjectif-based-on-ingredient';
import getIngredient from '@/lib/menu/get-ingredient';
import isInconsistent from '@/lib/menu/is-inconsistent';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import {
  addSauceTypesAlreadyUsed,
  getSauceTypesAlreadyUsed,
} from '@/lib/ssr-cache';
import { determinantSeparator } from '@/lib/menu/format-determinant';
import formatIngredientName from '@/lib/menu/format-ingredient-name';
import getItemsByIds from '@/lib/menu/get-items-by-ids';
import { filterItemsByTheme, ThemeContext } from '@/lib/menu/theme';
import getRandom from '@/lib/menu/get-random';

export default function generateSauce(
  data: Menu,
  platPrincipal: Plat,
  typePlat: TypePlat,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
  selectedIngredients?: Ingredient[],
  themeContext: ThemeContext = {},
): string {
  const preSauce = getPreSauce(data, rng, themeContext);
  const typeSauce = getSauceType(data, typePlat, rng, themeContext);

  let preSuite: string = typeSauce.determinants[preSauce.suite];
  preSuite = preSuite + determinantSeparator(preSuite);
  const ingredientSauce: Ingredient | null = getIngredient(
    getItemsByIds(data.ingredients, data.indexes.ingredientIdsByType[TypeAliment.SAUCE]),
    TypeAliment.SAUCE,
    false,
    isInconsistent(inconsistentLevel, rng) ? [] : typeSauce.compatibleIngredientTypes,
    rng,
    themeContext,
  );
  if (!ingredientSauce) {
    return '';
  }
  selectedIngredients?.push(ingredientSauce);
  let typeSuite: string = ingredientSauce.determinants[typeSauce.suite];
  typeSuite = typeSuite + determinantSeparator(typeSuite);
  const adjectifSauce: Adjectif | null = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientSauce,
    inconsistentLevel,
    rng,
    data.indexes,
    themeContext,
  );

  let sauce: string = preSauce.noms[platPrincipal.genre][platPrincipal.nombre] + ' ' + preSuite + typeSauce.nom + ' ' + typeSuite + formatIngredientName(ingredientSauce, rng);
  if (adjectifSauce) {
    sauce += ` ${adjectifSauce.noms[ingredientSauce.genre][ingredientSauce.nombre]}`;
  }
  return sauce;
}

function getPreSauce(data: Menu, rng?: RandomGenerator, themeContext: ThemeContext = {}): PreSauce {
  const availablePreSauces = filterItemsByTheme(data.preSauces, themeContext.theme);
  return getRandom(availablePreSauces, rng);
}

function getSauceType(
  data: Menu,
  typePlat: TypePlat,
  rng?: RandomGenerator,
  themeContext: ThemeContext = {},
): SauceType {
  const availableSauceTypes = filterItemsByTheme(
    getItemsByIds(data.sauceTypes, data.indexes.sauceTypeIdsByType[typePlat]),
    themeContext.theme,
  );
  const unusedSauceTypes = availableSauceTypes.filter((item: SauceType) =>
    !getSauceTypesAlreadyUsed().includes(item.id as number),
  );
  const selectableSauceTypes = unusedSauceTypes.length > 0 ? unusedSauceTypes : availableSauceTypes;
  const selected = getRandom(selectableSauceTypes, rng);
  addSauceTypesAlreadyUsed(selected.id as number);
  return selected;
}
