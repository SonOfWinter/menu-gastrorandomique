import { Plat } from '@/types/data/plat';
import { TypePlat } from '@/types/enums/type-plat';
import getRandom from '@/lib/menu/get-random';

const getPlatByType = (plats: Plat[], mainType: TypePlat): Plat => {
  const filterredPlats: Plat[] = plats.filter((item: Plat) =>
    item.types?.includes(mainType),
  );
  return getRandom(filterredPlats);
};

export default getPlatByType;
