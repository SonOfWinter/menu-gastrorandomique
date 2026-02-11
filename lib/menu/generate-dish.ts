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
import { InconsistentLevel } from '@/types/inconsistent-level';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

export const generateDish = (
  data: Menu,
  mainType: TypePlat,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
): Dish => {
  const platPrincipal: Plat = getPlatByType(data.plats, mainType, rng);
  const typeAliments: TypeAliment[] = isInconsistent(inconsistentLevel, rng)
    ? Object.values(TypeAliment)
    : [...platPrincipal.typeAliments[mainType]];
  const ingredients: Ingredient[] = typeAliments && Array.isArray(typeAliments)
    ? [...data.ingredients].filter((item: Ingredient) =>
      intersection(
        [...item.types],
        typeAliments,
      ).length > 0,
    ) : [];
  return {
    main: generateMain(data, platPrincipal, ingredients, inconsistentLevel, rng),
    second: generateSecond(data, platPrincipal, ingredients, inconsistentLevel, rng),
    sauce: hasRandomPart(3, rng)
      ? generateSauce(data, platPrincipal, mainType, inconsistentLevel, rng)
      : null,
  };
};
