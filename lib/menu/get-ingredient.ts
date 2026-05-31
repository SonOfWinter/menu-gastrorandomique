import { Ingredient } from '@/types/data/ingredient';
import { TYPE_ALIMENT_BITS, TypeAliment } from '@/types/enums/type-aliment';
import {
  addIngredientsAlreadyUsed,
  getIngredientsAlreadyUsed,
} from '@/lib/ssr-cache';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import { getCompatibilityMask, hasCompatibleMask } from '@/lib/menu/compatibility-mask';
import getThemedRandom from '@/lib/menu/get-themed-random';
import { ThemeContext } from '@/lib/menu/theme';
import {
  getCollectionWeight,
  getTypeAlimentWeight,
} from '@/lib/menu/theme';

const getIngredient = (
  ingredients: Ingredient[],
  typeFilter?: TypeAliment,
  excludeAlreadyUsed: boolean = true,
  additionalTypes?: readonly TypeAliment[] | null,
  rng?: RandomGenerator,
  themeContext: ThemeContext = {},
): Ingredient | null => {
  const typeFilterMask = typeFilter ? TYPE_ALIMENT_BITS[typeFilter] : 0;
  const additionalTypesMask = getCompatibilityMask(additionalTypes, TYPE_ALIMENT_BITS);
  const filteredIngredients: Ingredient[] = ingredients.filter((item: Ingredient) => {
    const alreadyUsed = getIngredientsAlreadyUsed().includes(item.id as number);
    const itemMask = item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_ALIMENT_BITS);
    const matchesType = hasCompatibleMask(itemMask, typeFilterMask);
    const matchesAdditionalTypes = hasCompatibleMask(itemMask, additionalTypesMask);
    return !(excludeAlreadyUsed && alreadyUsed)
      && matchesType
      && matchesAdditionalTypes;
  });
  if (filteredIngredients.length > 0) {
    const selected = getThemedRandom(
      filteredIngredients,
      (item) => getCollectionWeight(themeContext.theme, 'ingredients', item.id as number)
        * getTypeAlimentWeight(
          themeContext.theme,
          item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_ALIMENT_BITS),
        ),
      rng,
    );
    addIngredientsAlreadyUsed(selected.id as number);
    return selected;
  }
  return null;
};

export default getIngredient;
