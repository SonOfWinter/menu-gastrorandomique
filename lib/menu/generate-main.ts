import { Menu } from '@/types/menu';
import { Plat } from '@/types/data/plat';
import { Ingredient } from '@/types/data/ingredient';
import getIngredient from '@/lib/menu/get-ingredient';
import { Adjectif } from '@/types/data/adjectif';
import getAdjectifBasedOnIngredient from '@/lib/menu/get-adjectif-based-on-ingredient';
import hasRandomPart from '@/lib/menu/has-random-part';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import capitalize from '@/lib/utils/capitalize';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import { TypePlat } from '@/types/enums/type-plat';
import getPostByType from '@/lib/menu/get-post-by-type';
import getPreByType from '@/lib/menu/get-pre-by-type';

const generateMain = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
  mainType: TypePlat,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
): string => {
  let main: string = '';
  const ingredientPrincipal: Ingredient | null = getIngredient(ingredients, undefined, true, null, rng);
  if (!ingredientPrincipal) {
    return '';
  }
  const adjectifPrincipal: Adjectif | null = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientPrincipal,
    inconsistentLevel,
    rng,
  );
  if (hasRandomPart(3, rng)) {
    const prePrincipal = getPreByType(data.pres, mainType, rng);
    main += `${prePrincipal.noms[platPrincipal.genre][platPrincipal.nombre]} `;
  }
  main += `${platPrincipal.nom} ${ingredientPrincipal.determinants[TypeDeterminant.PRINCIPAL]}`;
  if (!ingredientPrincipal.determinants[TypeDeterminant.PRINCIPAL].endsWith('\'')) {
    main += ' ';
  }
  main += `${ingredientPrincipal.nom}`
  if (adjectifPrincipal) {
    main += ` ${adjectifPrincipal?.noms[ingredientPrincipal.genre][ingredientPrincipal.nombre]}`;
  }

  if (hasRandomPart(3, rng)) {
    const postPrincipal = getPostByType(data.posts, mainType, rng);
    main += ` ${postPrincipal.nom}`;
  }
  return capitalize(main);
};

export default generateMain;
