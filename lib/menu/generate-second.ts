import { Menu } from '@/types/menu';
import { Plat } from '@/types/data/plat';
import { Ingredient } from '@/types/data/ingredient';
import { Lien } from '@/types/data/lien';
import getRandom from '@/lib/menu/get-random';
import getIngredient from '@/lib/menu/get-ingredient';
import { Adjectif } from '@/types/data/adjectif';
import getAdjectifBasedOnIngredient from '@/lib/menu/get-adjectif-based-on-ingredient';
import hasRandomPart from '@/lib/menu/has-random-part';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import { TypePlat } from '@/types/enums/type-plat';
import getPostByType from '@/lib/menu/get-post-by-type';
import getIndexedItemsByTypes from '@/lib/menu/get-indexed-items-by-types';
import {
  addLiensAlreadyUsed,
  getLiensAlreadyUsed,
} from '@/lib/ssr-cache';
import { determinantSeparator } from '@/lib/menu/format-determinant';
import formatIngredientName from '@/lib/menu/format-ingredient-name';
import getItemsByIds from '@/lib/menu/get-items-by-ids';

const generateSecond = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
  mainType: TypePlat,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
  selectedIngredients?: Ingredient[],
): string => {
  let second: string = '';
  const ingredientSecondaire: Ingredient | null = getIngredient(
    ingredients,
    undefined,
    true,
    null,
    rng,
  );
  if (!ingredientSecondaire) {
    return '';
  }
  selectedIngredients?.push(ingredientSecondaire);
  const availableLiens = getIndexedItemsByTypes(data.liens, data.indexes.lienIdsByType, ingredientSecondaire.types);
  const compatibleLiens = availableLiens.length > 0 ? availableLiens : data.liens;
  const unusedLiens = compatibleLiens.filter((lien: Lien) =>
    !getLiensAlreadyUsed().includes(lien.id as number),
  );
  const lienSecondaire: Lien = getRandom(
    unusedLiens.length > 0 ? unusedLiens : compatibleLiens,
    rng,
  );
  addLiensAlreadyUsed(lienSecondaire.id as number);
  const preIngredient: string = ingredientSecondaire.determinants[lienSecondaire.suite];
  const adjectifSecondaire: Adjectif | null = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientSecondaire,
    inconsistentLevel,
    rng,
    data.indexes,
  );
  second += `${lienSecondaire.noms[platPrincipal.genre][platPrincipal.nombre]} ${preIngredient}${determinantSeparator(preIngredient)}`;
  second += `${formatIngredientName(ingredientSecondaire, rng)}`;
  if (adjectifSecondaire) {
    second += ` ${adjectifSecondaire.noms[ingredientSecondaire.genre][ingredientSecondaire.nombre]}`;
  }

  if (hasRandomPart(3, rng)) {
    const postSecondaire = getPostByType(
      getItemsByIds(data.posts, data.indexes.postIdsByType[mainType]),
      mainType,
      rng,
    );
    second += ` ${postSecondaire.nom}`;
  }
  return second;
};

export default generateSecond;
