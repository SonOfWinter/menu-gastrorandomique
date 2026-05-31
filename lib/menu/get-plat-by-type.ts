import { Plat } from '@/types/data/plat';
import { TYPE_PLAT_BITS, TypePlat } from '@/types/enums/type-plat';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import {
  addPlatsAlreadyUsed,
  getPlatsAlreadyUsed,
} from '@/lib/ssr-cache';
import { getCompatibilityMask, hasCompatibleMask } from '@/lib/menu/compatibility-mask';
import { filterItemsByTheme, ThemeContext } from '@/lib/menu/theme';
import getRandom from '@/lib/menu/get-random';

const getPlatByType = (
  plats: Plat[],
  mainType: TypePlat,
  rng?: RandomGenerator,
  themeContext: ThemeContext = {},
): Plat => {
  const requiredMask = TYPE_PLAT_BITS[mainType];
  const themedPlats = filterItemsByTheme(plats, themeContext.theme);
  const filterredPlats: Plat[] = themedPlats.filter((item: Plat) =>
    hasCompatibleMask(item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_PLAT_BITS), requiredMask),
  );
  const unusedPlats = filterredPlats.filter((item: Plat) =>
    !getPlatsAlreadyUsed().includes(item.id as number),
  );
  const availablePlats = unusedPlats.length > 0 ? unusedPlats : filterredPlats;
  const selected = getRandom(availablePlats, rng);
  addPlatsAlreadyUsed(selected.id as number);
  return selected;
};

export default getPlatByType;
