import { Menu } from '@/types/menu';
import { Plat } from '@/types/data/plat';
import { TypePlat } from '@/types/enums/type-plat';
import { Ingredient } from '@/types/data/ingredient';
import ingredients from '@/data/menu-ingredient';
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

export default function generateSauce(
  data: Menu,
  platPrincipal: Plat,
  typePlat: TypePlat,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
): string {
  const preSauce = getPreSauce(data, rng);
  const typeSauce = getSauceType(data, typePlat, rng);

  let preSuite: string = typeSauce.determinants[preSauce.suite];
  if (preSuite !== '' && !preSuite.endsWith('\'')) {
    preSuite = preSuite + ' ';
  }
  const ingredientSauce: Ingredient | null = getIngredient(
    ingredients,
    TypeAliment.SAUCE,
    false,
    isInconsistent(inconsistentLevel, rng) ? [] : typeSauce.compatibleIngredientTypes,
    rng,
  );
  if (!ingredientSauce) {
    return '';
  }
  let typeSuite: string = ingredientSauce.determinants[typeSauce.suite];
  if (typeSuite !== '' && !typeSuite.endsWith('\'')) {
    typeSuite = typeSuite + ' ';
  }
  const adjectifSauce: Adjectif | null = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientSauce,
    inconsistentLevel,
    rng,
  );

  let sauce: string = preSauce.noms[platPrincipal.genre][platPrincipal.nombre] + ' ' + preSuite + typeSauce.nom + ' ' + typeSuite + ingredientSauce.nom;
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
  const availableSauceTypes = [...data.sauceTypes].filter((item: SauceType) =>
    item.types.includes(typePlat),
  );
  return getRandom(availableSauceTypes, rng);
}
