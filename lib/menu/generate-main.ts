import { Menu } from '@/types/menu';
import { Plat } from '@/types/data/plat';
import { Ingredient } from '@/types/data/ingredient';
import getIngredient from '@/lib/menu/get-ingredient';
import { Adjectif } from '@/types/data/adjectif';
import getAdjectifBasedOnIngredient from '@/lib/menu/get-adjectif-based-on-ingredient';
import hasRandomPart from '@/lib/menu/has-random-part';
import { Pre } from '@/types/data/pre';
import getRandom from '@/lib/menu/get-random';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { Post } from '@/types/data/post';
import capitalize from '@/lib/utils/capitalize';

const generateMain = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
  inconsistentLevel: number,
): string => {
  let main: string = '';
  const ingredientPrincipal: Ingredient | null = getIngredient(ingredients);
  if (!ingredientPrincipal) {
    return '';
  }
  const adjectifPrincipal: Adjectif | null = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientPrincipal,
    inconsistentLevel,
  );
  if (hasRandomPart()) {
    const prePrincipal: Pre = getRandom(data.pres);
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

  if (hasRandomPart()) {
    const postPrincipal: Post = getRandom(data.posts);
    main += ` ${postPrincipal.nom}`;
  }
  return capitalize(main);
};

export default generateMain;
