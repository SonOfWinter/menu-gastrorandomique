import { Plat } from '@/types/data/plat';
import { TypePlat } from '@/types/enums/type-plat';
import getRandom from '@/lib/menu/get-random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';

const getPlatByType = (
  plats: Plat[],
  mainType: TypePlat,
  rng?: RandomGenerator,
): Plat => {
  const filterredPlats: Plat[] = plats.filter((item: Plat) =>
    item.types?.includes(mainType),
  );
  return getRandom(filterredPlats, rng);
};

export default getPlatByType;
