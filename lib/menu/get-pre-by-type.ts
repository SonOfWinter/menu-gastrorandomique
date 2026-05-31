import { Pre } from '@/types/data/pre';
import { TYPE_PLAT_BITS, TypePlat } from '@/types/enums/type-plat';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import {
  addPresAlreadyUsed,
  getPresAlreadyUsed,
} from '@/lib/ssr-cache';
import { getCompatibilityMask, hasCompatibleMask } from '@/lib/menu/compatibility-mask';
import getThemedRandom from '@/lib/menu/get-themed-random';
import {
  getCollectionWeight,
  getTypePlatWeight,
  ThemeContext,
} from '@/lib/menu/theme';

const getPreByType = (
  pres: Pre[],
  mainType: TypePlat,
  rng?: RandomGenerator,
  themeContext: ThemeContext = {},
): Pre => {
  const requiredMask = TYPE_PLAT_BITS[mainType];
  const typedPres = pres.filter((item: Pre) =>
    hasCompatibleMask(item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_PLAT_BITS), requiredMask),
  );
  const availablePres = typedPres.length > 0 ? typedPres : pres;
  const unusedPres = availablePres.filter((item: Pre) =>
    !getPresAlreadyUsed().includes(item.id as number),
  );
  const selectablePres = unusedPres.length > 0 ? unusedPres : availablePres;
  const selected = getThemedRandom(
    selectablePres,
    (item) => getCollectionWeight(themeContext.theme, 'pres', item.id as number)
      * getTypePlatWeight(themeContext.theme, item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_PLAT_BITS)),
    rng,
  );
  addPresAlreadyUsed(selected.id as number);
  return selected;
};

export default getPreByType;
