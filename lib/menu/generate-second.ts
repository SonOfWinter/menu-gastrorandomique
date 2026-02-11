import { Menu } from '@/types/menu';
import { Plat } from '@/types/data/plat';
import { Ingredient } from '@/types/data/ingredient';
import { Lien } from '@/types/data/lien';
import getRandom from '@/lib/menu/get-random';
import getIngredient from '@/lib/menu/get-ingredient';
import { Adjectif } from '@/types/data/adjectif';
import getAdjectifBasedOnIngredient from '@/lib/menu/get-adjectif-based-on-ingredient';
import hasRandomPart from '@/lib/menu/has-random-part';
import { Post } from '@/types/data/post';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

const generateSecond = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
): string => {
  let second: string = '';
  const lienSecondaire: Lien = getRandom(data.liens, rng);
  const ingredientSecondaire: Ingredient | null = getIngredient(ingredients, undefined, true, null, rng);
  if (!ingredientSecondaire) {
    return '';
  }
  const preIngredient: string = ingredientSecondaire.determinants[lienSecondaire.suite];
  const adjectifSecondaire: Adjectif | null = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientSecondaire,
    inconsistentLevel,
    rng,
  );
  second += `${lienSecondaire.noms[platPrincipal.genre][platPrincipal.nombre]} ${preIngredient}`;
  if (!preIngredient.endsWith('\'')) {
    second += ' ';
  }
  second += `${ingredientSecondaire.nom}`;
  if (adjectifSecondaire) {
    second += ` ${adjectifSecondaire.noms[ingredientSecondaire.genre][ingredientSecondaire.nombre]}`;
  }

  if (hasRandomPart(3, rng)) {
    const postSecondaire: Post = getRandom(data.posts, rng);
    second += ` ${postSecondaire.nom}`;
  }
  return second;
};

export default generateSecond;
