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
): Pre => {
  const typedPres = pres.filter((item: Pre) =>
    item.types.includes(mainType),
  );
  const availablePres = typedPres.length > 0 ? typedPres : pres;
  const unusedPres = availablePres.filter((item: Pre) =>
    !getPresAlreadyUsed().includes(item.id as number),
  );
  const selected = getRandom(
    unusedPres.length > 0 ? unusedPres : availablePres,
    rng,
  );
  addPresAlreadyUsed(selected.id as number);
  return selected;
};

export default getPreByType;
