import { Ingredient } from '@/types/data/ingredient';
import getRandom from '@/lib/menu/get-random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

export default function formatIngredientName(
  ingredient: Ingredient,
  rng?: RandomGenerator,
): string {
  if (!ingredient.postAdjectifs || ingredient.postAdjectifs.length === 0) {
    return ingredient.nom;
  }

  const postAdjectif = getRandom([...ingredient.postAdjectifs], rng);

  return postAdjectif === '' ? ingredient.nom : `${ingredient.nom} ${postAdjectif}`;
}
