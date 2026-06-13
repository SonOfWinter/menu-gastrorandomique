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
import getIndexedItemsByMask from '@/lib/menu/get-indexed-items-by-mask';
import getItemsByIds from '@/lib/menu/get-items-by-ids';
import getDishIcons from '@/lib/menu/get-dish-icons';
import getDishEffectIcons from '@/lib/menu/get-dish-effect-icons';
import { getCompatibilityMask } from '@/lib/menu/compatibility-mask';
import { TYPE_ALIMENT_BITS } from '@/types/enums/type-aliment';
import { ThemeContext } from '@/lib/menu/theme';

export const generateDish = (
  data: Menu,
  mainType: TypePlat,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
  themeContext: ThemeContext = {},
): Dish => {
  const selectedIngredients: Ingredient[] = [];
  const platPrincipal: Plat = getPlatByType(
    getItemsByIds(data.plats, data.indexes.platIdsByType[mainType]),
    mainType,
    rng,
    themeContext,
  );
  const inconsistent = isInconsistent(inconsistentLevel, rng);
  const typeAliments: TypeAliment[] = inconsistent
    ? Object.values(TypeAliment)
    : [...platPrincipal.typeAliments[mainType]];
  const requiredMask = inconsistent
    ? getCompatibilityMask(Object.values(TypeAliment), TYPE_ALIMENT_BITS)
    : platPrincipal.typeAlimentMasks?.[mainType] ?? getCompatibilityMask(typeAliments, TYPE_ALIMENT_BITS);
  const ingredients: Ingredient[] = typeAliments && Array.isArray(typeAliments)
    ? getIndexedItemsByMask(data.ingredients, data.indexes.ingredientIdsByCompatibilityMask, requiredMask)
    : [];
  const main = generateMain(data, platPrincipal, ingredients, mainType, inconsistentLevel, rng, selectedIngredients, themeContext);
  const second = generateSecond(data, platPrincipal, ingredients, mainType, inconsistentLevel, rng, selectedIngredients, themeContext);
  const sauce = hasRandomPart(3, rng)
    ? generateSauce(data, platPrincipal, mainType, inconsistentLevel, rng, selectedIngredients, themeContext)
    : null;

  return {
    main,
    second,
    sauce,
    icons: [
      ...getDishIcons(selectedIngredients, mainType),
      ...getDishEffectIcons(mainType, main, second, sauce),
    ],
  };
};
