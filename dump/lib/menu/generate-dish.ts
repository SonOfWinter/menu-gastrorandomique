import { Menu } from '@/types/menu';
import { TypePlat } from '@/types/enums/type-plat';
import { Dish } from '@/types/dish';
import { Plat } from '@/types/data/plat';
import getPlatByType from '@/lib/menu/get-plat-by-type';
import { TypeAliment } from '@/types/enums/type-aliment';
import isInconsistent from '@/lib/menu/is-inconsistent';
import { Ingredient } from '@/types/data/ingredient';
import intersection from '@/lib/utils/intersection';
import generateMain from '@/lib/menu/generate-main';
import generateSecond from '@/lib/menu/generate-second';
import hasRandomPart from '@/lib/menu/has-random-part';
import generateSauce from '@/lib/menu/generate-sauce';

export const generateDish = (data: Menu, mainType: TypePlat, inconsistentLevel: number): Dish => {
  const platPrincipal: Plat = getPlatByType(data.plats, mainType);
  const typeAliments: TypeAliment[] = isInconsistent(inconsistentLevel)
    ? [...platPrincipal.typeAliments[mainType]]
    : Object.values(TypeAliment);
  const ingredients: Ingredient[] = typeAliments && Array.isArray(typeAliments)
    ? [...data.ingredients].filter((item: Ingredient) =>
      intersection(
        [...item.types],
        typeAliments,
      ).length > 0,
    ) : [];
  return {
    main: generateMain(data, platPrincipal, ingredients, inconsistentLevel),
    second: generateSecond(data, platPrincipal, ingredients, inconsistentLevel),
    sauce: hasRandomPart() ? generateSauce(data, platPrincipal, mainType, inconsistentLevel) : null,
  };
};
