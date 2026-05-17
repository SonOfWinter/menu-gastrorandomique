import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';

export type MenuIndexes = {
  adjectifIds: number[];
  lienIds: number[];
  ingredientIdsByType: Record<TypeAliment, number[]>;
  adjectifIdsByType: Record<TypeAliment, number[]>;
  lienIdsByType: Record<TypeAliment, number[]>;
  platIdsByType: Record<TypePlat, number[]>;
  postIdsByType: Record<TypePlat, number[]>;
  preIdsByType: Record<TypePlat, number[]>;
  sauceTypeIdsByType: Record<TypePlat, number[]>;
};
