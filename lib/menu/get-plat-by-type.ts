import { Plat } from '@/types/data/plat';
import { TypePlat } from '@/types/enums/type-plat';
import getRandom from '@/lib/menu/get-random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import {
  addPlatsAlreadyUsed,
  getPlatsAlreadyUsed,
} from '@/lib/ssr-cache';

const getPlatByType = (
  plats: Plat[],
  mainType: TypePlat,
  rng?: RandomGenerator,
): Plat => {
  const filterredPlats: Plat[] = plats.filter((item: Plat) =>
    item.types?.includes(mainType),
  );
  const unusedPlats = filterredPlats.filter((item: Plat) =>
    !getPlatsAlreadyUsed().includes(item.id as number),
  );
  const selected = getRandom(
    unusedPlats.length > 0 ? unusedPlats : filterredPlats,
    rng,
  );
  addPlatsAlreadyUsed(selected.id as number);
  return selected;
};

export default getPlatByType;
