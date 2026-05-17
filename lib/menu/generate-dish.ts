import { Menu } from '@/types/menu';
import { TypePlat } from '@/types/enums/type-plat';
import { Dish } from '@/types/dish';
import { Plat } from '@/types/data/plat';
import getPlatByType from '@/lib/menu/get-plat-by-type';
import { TypeAliment } from '@/types/enums/type-aliment';
import isInconsistent from '@/lib/menu/is-inconsistent';
import { Ingredient } from '@/types/data/ingredient';
import generateMain from '@/lib/menu/generate-main';
import generateSecond from '@/lib/menu/generate-second';
import hasRandomPart from '@/lib/menu/has-random-part';
import generateSauce from '@/lib/menu/generate-sauce';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import getIndexedItemsByTypes from '@/lib/menu/get-indexed-items-by-types';

export const generateDish = (
  data: Menu,
  mainType: TypePlat,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
): Dish => {
  const platPrincipal: Plat = getPlatByType(data.indexes.platsByType[mainType], mainType, rng, data.indexes.platsByType);
  const typeAliments: TypeAliment[] = isInconsistent(inconsistentLevel, rng)
    ? Object.values(TypeAliment)
    : [...platPrincipal.typeAliments[mainType]];
  const ingredients: Ingredient[] = typeAliments && Array.isArray(typeAliments)
    ? getIndexedItemsByTypes(data.indexes.ingredientsByType, typeAliments)
    : [];
  return {
    main: generateMain(data, platPrincipal, ingredients, mainType, inconsistentLevel, rng),
    second: generateSecond(data, platPrincipal, ingredients, mainType, inconsistentLevel, rng),
    sauce: hasRandomPart(3, rng)
      ? generateSauce(data, platPrincipal, mainType, inconsistentLevel, rng)
      : null,
  };
};
