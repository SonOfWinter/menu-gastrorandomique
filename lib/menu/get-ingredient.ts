import { Ingredient } from '@/types/data/ingredient';
import { TypeAliment } from '@/types/enums/type-aliment';
import getRandom from '@/lib/menu/get-random';
import {
  addIngredientsAlreadyUsed,
  getIngredientsAlreadyUsed,
} from '@/lib/ssr-cache';

const getIngredient = (
  ingredients: Ingredient[],
  typeFilter?: TypeAliment,
  excludeAlreadyUsed: boolean = true,
  additionalTypes?: TypeAliment[] | null,
): Ingredient | null => {
  const filteredIngredients: Ingredient[] = ingredients.filter((item: Ingredient) => {
    const alreadyUsed = getIngredientsAlreadyUsed().includes(item.id);
    const matchesType = typeFilter ? item.types.includes(typeFilter) : true;
    let matchesAdditionalTypes = true;
    if (additionalTypes && additionalTypes.length > 0) {
      matchesAdditionalTypes = additionalTypes.some((type: TypeAliment): boolean =>
        item.types.includes(type),
      );
    }
    return !(excludeAlreadyUsed && alreadyUsed)
      && matchesType
      && matchesAdditionalTypes;
  });
  if (filteredIngredients.length > 0) {
    const selected = getRandom(filteredIngredients);
    addIngredientsAlreadyUsed(selected.id);
    return selected;
  }
  return null;
};

export default getIngredient;
