import { Menu } from '@/types/menu';
import { Plat } from '@/types/data/plat';
import { TypePlat } from '@/types/enums/type-plat';
import { Ingredient } from '@/types/data/ingredient';
import { TypeAliment } from '@/types/enums/type-aliment';
import { Adjectif } from '@/types/data/adjectif';
import { PreSauce } from '@/types/data/pre-sauce';
import getRandom from '@/lib/menu/get-random';
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

export default function generateSauce(
  data: Menu,
  platPrincipal: Plat,
  typePlat: TypePlat,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
  selectedIngredients?: Ingredient[],
): string {
  const preSauce = getPreSauce(data, rng);
  const typeSauce = getSauceType(data, typePlat, rng);

  let preSuite: string = typeSauce.determinants[preSauce.suite];
  preSuite = preSuite + determinantSeparator(preSuite);
  const ingredientSauce: Ingredient | null = getIngredient(
    getItemsByIds(data.ingredients, data.indexes.ingredientIdsByType[TypeAliment.SAUCE]),
    TypeAliment.SAUCE,
    false,
    isInconsistent(inconsistentLevel, rng) ? [] : typeSauce.compatibleIngredientTypes,
    rng,
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
  );

  let sauce: string = preSauce.noms[platPrincipal.genre][platPrincipal.nombre] + ' ' + preSuite + typeSauce.nom + ' ' + typeSuite + formatIngredientName(ingredientSauce, rng);
  if (adjectifSauce) {
    sauce += ` ${adjectifSauce.noms[ingredientSauce.genre][ingredientSauce.nombre]}`;
  }
  return sauce;
}

function getPreSauce(data: Menu, rng?: RandomGenerator): PreSauce {
  const availablePreSauces = [...data.preSauces];
  return getRandom(availablePreSauces, rng);
}

function getSauceType(
  data: Menu,
  typePlat: TypePlat,
  rng?: RandomGenerator,
): SauceType {
  const availableSauceTypes = getItemsByIds(data.sauceTypes, data.indexes.sauceTypeIdsByType[typePlat]);
  const unusedSauceTypes = availableSauceTypes.filter((item: SauceType) =>
    !getSauceTypesAlreadyUsed().includes(item.id as number),
  );
  const selected = getRandom(
    unusedSauceTypes.length > 0 ? unusedSauceTypes : availableSauceTypes,
    rng,
  );
  addSauceTypesAlreadyUsed(selected.id as number);
  return selected;
}
