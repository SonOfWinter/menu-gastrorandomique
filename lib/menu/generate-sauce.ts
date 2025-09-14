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

export default function generateSauce(
  data: Menu,
  platPrincipal: Plat,
  typePlat: TypePlat,
  inconsistentLevel: number,
): string {
  const preSauce = getPreSauce(data);
  const typeSauce = getSauceType(data, typePlat);

  let preSuite: string = typeSauce.determinants[preSauce.suite];
  if (preSuite !== '' && !preSuite.endsWith('\'')) {
    preSuite = preSuite + ' ';
  }
  const ingredientSauce: Ingredient | null = getIngredient(
    ingredients,
    TypeAliment.SAUCE,
    false,
    isInconsistent(inconsistentLevel) ? [] : typeSauce.compatibleIngredientTypes,
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
  );

  let sauce: string = preSauce.noms[platPrincipal.genre][platPrincipal.nombre] + ' ' + preSuite + typeSauce.nom + ' ' + typeSuite + ingredientSauce.nom;
  if (adjectifSauce) {
    sauce += ` ${adjectifSauce.noms[ingredientSauce.genre][ingredientSauce.nombre]}`;
  }
  return sauce;
}

function getPreSauce(data: Menu): PreSauce {
  const availablePreSauces = [...data.preSauces];
  return getRandom(availablePreSauces);
}

function getSauceType(data: Menu, typePlat: TypePlat): SauceType {
  const availableSauceTypes = [...data.sauceTypes].filter((item: SauceType) =>
    item.types.includes(typePlat),
  );
  return getRandom(availableSauceTypes);
}
