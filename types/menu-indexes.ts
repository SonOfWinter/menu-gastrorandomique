import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';

export type MenuIndexes = {
  ingredientIdsByType: Record<TypeAliment, number[]>;
  ingredientIdsByCompatibilityMask: Record<number, number[]>;
  adjectifIdsByType: Record<TypeAliment, number[]>;
  adjectifIdsByAcceptedMask: Record<number, number[]>;
  lienIdsByType: Record<TypeAliment, number[]>;
  lienIdsByAcceptedMask: Record<number, number[]>;
  platIdsByType: Record<TypePlat, number[]>;
  postIdsByType: Record<TypePlat, number[]>;
  preIdsByType: Record<TypePlat, number[]>;
  sauceTypeIdsByType: Record<TypePlat, number[]>;
};
