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
  platsByType?: Record<TypePlat, Plat[]>,
): Plat => {
  const filterredPlats: Plat[] = platsByType?.[mainType] ?? plats.filter((item: Plat) =>
    item.types?.includes(mainType),
  );
  const unusedPlats = filterredPlats.filter((item: Plat) =>
    !getPlatsAlreadyUsed().includes(item.nom),
  );
  const selected = getRandom(
    unusedPlats.length > 0 ? unusedPlats : filterredPlats,
    rng,
  );
  addPlatsAlreadyUsed(selected.nom);
  return selected;
};

export default getPlatByType;
