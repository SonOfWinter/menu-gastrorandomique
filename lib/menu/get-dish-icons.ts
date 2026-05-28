import { Ingredient } from '@/types/data/ingredient';
import { DishIcon } from '@/types/dish-icon';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';

const vegetarianExcludedTypes = new Set<TypeAliment>([
  TypeAliment.CHARCUTERIE,
  TypeAliment.FRUIT_DE_MER,
  TypeAliment.POISSON,
  TypeAliment.VIANDE_BLANCHE,
  TypeAliment.VIANDE_ROUGE,
]);

const meatTypes = new Set<TypeAliment>([
  TypeAliment.CHARCUTERIE,
  TypeAliment.VIANDE_BLANCHE,
  TypeAliment.VIANDE_ROUGE,
]);

const fishTypes = new Set<TypeAliment>([
  TypeAliment.FRUIT_DE_MER,
  TypeAliment.POISSON,
]);

function hasType(ingredients: readonly Ingredient[], types: readonly TypeAliment[]): boolean {
  return ingredients.some((ingredient) =>
    ingredient.types.some((type) => types.includes(type)),
  );
}

function hasOnlyTypes(ingredients: readonly Ingredient[], types: ReadonlySet<TypeAliment>): boolean {
  return ingredients.length > 0
    && ingredients.every((ingredient) =>
      ingredient.types.length > 0
      && ingredient.types.every((type) => types.has(type)),
    );
}

export default function getDishIcons(
  ingredients: readonly Ingredient[],
  typePlat: TypePlat,
): DishIcon[] {
  const icons: DishIcon[] = [];
  const canShowDietaryIcons = typePlat !== TypePlat.DESSERT;

  if (canShowDietaryIcons && !hasType(ingredients, [...vegetarianExcludedTypes])) {
    icons.push('vegetarian');
  }

  if (ingredients.some((ingredient) => ingredient.isSpicy === true)) {
    icons.push('spicy');
  }

  if (hasType(ingredients, [TypeAliment.ALCOOL])) {
    icons.push('alcohol');
  }

  if (canShowDietaryIcons && hasOnlyTypes(ingredients, meatTypes)) {
    icons.push('meat');
  }

  if (canShowDietaryIcons && hasOnlyTypes(ingredients, fishTypes)) {
    icons.push('fish');
  }

  return icons;
}
