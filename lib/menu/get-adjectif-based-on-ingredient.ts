import { Adjectif } from '@/types/data/adjectif';
import { Ingredient } from '@/types/data/ingredient';
import isInconsistent from '@/lib/menu/is-inconsistent';
import {
  addAdjectifsAlreadyUsed,
  getAdjectifsAlreadyUsed,
} from '@/lib/ssr-cache';
import { InconsistentLevel } from '@/types/inconsistent-level';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import { MenuIndexes } from '@/types/menu-indexes';
import getIndexedItemsByMask from '@/lib/menu/get-indexed-items-by-mask';
import { TYPE_ALIMENT_BITS } from '@/types/enums/type-aliment';
import { getCompatibilityMask, hasCompatibleMask } from '@/lib/menu/compatibility-mask';
import { filterItemsByTheme, ThemeContext } from '@/lib/menu/theme';
import getRandom from '@/lib/menu/get-random';

const getAdjectifBasedOnIngredient = (
  adjectifs: Adjectif[],
  ingredient: Ingredient,
  inconsistentLevel: InconsistentLevel,
  rng?: RandomGenerator,
  indexes?: MenuIndexes,
  themeContext: ThemeContext = {},
): Adjectif | null => {
  const ingredientMask = ingredient.compatibilityMask ?? getCompatibilityMask(ingredient.types, TYPE_ALIMENT_BITS);
  const themedAdjectifs = filterItemsByTheme(adjectifs, themeContext.theme);
  const filteredAdjectifs = isInconsistent(inconsistentLevel, rng)
    ? themedAdjectifs
    : indexes
      ? filterItemsByTheme(
        getIndexedItemsByMask(adjectifs, indexes.adjectifIdsByAcceptedMask, ingredientMask),
        themeContext.theme,
      )
        .filter((item: Adjectif) => !getAdjectifsAlreadyUsed().includes(item.id as number))
      : themedAdjectifs.filter((item: Adjectif) =>
        hasCompatibleMask(item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_ALIMENT_BITS), ingredientMask)
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
