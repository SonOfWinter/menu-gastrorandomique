import { InconsistentLevel } from '@/types/inconsistent-level';

export type MenuPriceRange = {
  min: number;
  max: number;
};

export type MenuGenerationConfig = {
  dishCount: number;
  inconsistentLevel: InconsistentLevel;
  priceRange: MenuPriceRange;
};

export const defaultMenuConfig: MenuGenerationConfig = {
  dishCount: 3,
  inconsistentLevel: 0,
  priceRange: {
    min: 30.0,
    max: 250.0,
  },
};
