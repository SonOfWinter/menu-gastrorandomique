import { Pre } from '@/types/data/pre';
import { TypePlat } from '@/types/enums/type-plat';
import getRandom from '@/lib/menu/get-random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import {
  addPresAlreadyUsed,
  getPresAlreadyUsed,
} from '@/lib/ssr-cache';

const getPreByType = (
  pres: Pre[],
  mainType: TypePlat,
  rng?: RandomGenerator,
  presByType?: Record<TypePlat, Pre[]>,
): Pre => {
  const typedPres = presByType?.[mainType] ?? pres.filter((item: Pre) =>
    item.types.includes(mainType),
  );
  const availablePres = typedPres.length > 0 ? typedPres : pres;
  const unusedPres = availablePres.filter((item: Pre) =>
    !getPresAlreadyUsed().includes(item.id),
  );
  const selected = getRandom(
    unusedPres.length > 0 ? unusedPres : availablePres,
    rng,
  );
  addPresAlreadyUsed(selected.id);
  return selected;
};

export default getPreByType;
