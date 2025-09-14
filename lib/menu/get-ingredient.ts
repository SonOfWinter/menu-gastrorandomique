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
): Ingredient | null => {
  const filteredIngredients: Ingredient[] = ingredients.filter((item: Ingredient) => {
    return !(excludeAlreadyUsed && getIngredientsAlreadyUsed().includes(item.id))
      && (!typeFilter || item.types.includes(typeFilter));
  });
  if (filteredIngredients.length > 0) {
    const selected = getRandom(filteredIngredients);
    addIngredientsAlreadyUsed(selected.id);
    return selected;
  }
  return null;
};

export default getIngredient;
