import { Adjectif } from '@/types/data/adjectif';
import { Ingredient } from '@/types/data/ingredient';
import isInconsistent from '@/lib/menu/is-inconsistent';
import intersection from '@/lib/utils/intersection';
import getRandom from '@/lib/menu/get-random';
import {
  addAdjectifsAlreadyUsed,
  getAdjectifsAlreadyUsed,
} from '@/lib/ssr-cache';
import { InconsistentLevel } from '@/types/inconsistent-level';

const getAdjectifBasedOnIngredient = (
  adjectifs: Adjectif[],
  ingredient: Ingredient,
  inconsistentLevel: InconsistentLevel,
): Adjectif | null => {
  const filteredAdjectifs = isInconsistent(inconsistentLevel)
    ? adjectifs.filter((item: Adjectif) =>
      intersection(
        [...item.types],
        [...ingredient.types],
      ).length > 0
      && !getAdjectifsAlreadyUsed().includes(item.id),
    )
    : adjectifs;
  if (filteredAdjectifs.length === 0) {
    return null;
  }
  const selected = getRandom(filteredAdjectifs);
  if (!selected) {
    return null;
  }
  addAdjectifsAlreadyUsed(selected.id);
  return selected;
};
export default getAdjectifBasedOnIngredient;
