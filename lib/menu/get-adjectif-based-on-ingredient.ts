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
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import getIndexedItemsByTypes from '@/lib/menu/get-indexed-items-by-types';
import { MenuIndexes } from '@/types/menu-indexes';

const getAdjectifBasedOnIngredient = (
  adjectifs: Adjectif[],
  ingredient: Ingredient,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
  indexes?: MenuIndexes,
): Adjectif | null => {
  const filteredAdjectifs = isInconsistent(inconsistentLevel, rng)
    ? adjectifs
    : indexes
      ? getIndexedItemsByTypes(adjectifs, indexes.adjectifIdsByType, ingredient.types)
        .filter((item: Adjectif) => !getAdjectifsAlreadyUsed().includes(item.id as number))
      : adjectifs.filter((item: Adjectif) =>
        intersection(
          [...item.types],
          [...ingredient.types],
        ).length > 0
        && !getAdjectifsAlreadyUsed().includes(item.id as number),
      );
  if (filteredAdjectifs.length === 0) {
    return null;
  }
  const selected = getRandom(filteredAdjectifs, rng);
  if (!selected) {
    return null;
  }
  addAdjectifsAlreadyUsed(selected.id as number);
  return selected;
};
export default getAdjectifBasedOnIngredient;
