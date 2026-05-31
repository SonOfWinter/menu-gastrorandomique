import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';
import { EntityId } from '@/types/entity-id';

export type ThemeId = string;

export type ThemeWeightConfig = {
  typeAliments?: Partial<Record<TypeAliment, number>>;
  typePlats?: Partial<Record<TypePlat, number>>;
  ingredients?: Partial<Record<EntityId, number>>;
  adjectifs?: Partial<Record<EntityId, number>>;
  liens?: Partial<Record<EntityId, number>>;
  plats?: Partial<Record<EntityId, number>>;
  posts?: Partial<Record<EntityId, number>>;
  pres?: Partial<Record<EntityId, number>>;
  preSauces?: Partial<Record<EntityId, number>>;
  sauceTypes?: Partial<Record<EntityId, number>>;
  titles?: Partial<Record<EntityId, number>>;
  complements?: Partial<Record<EntityId, number>>;
};

export type Theme = {
  id: ThemeId;
  nom: string;
  weights: ThemeWeightConfig;
};

export type CompiledThemeWeights = {
  typeAlimentMasks: Partial<Record<number, number>>;
  typePlatMasks: Partial<Record<number, number>>;
  ingredients: Partial<Record<number, number>>;
  adjectifs: Partial<Record<number, number>>;
  liens: Partial<Record<number, number>>;
  plats: Partial<Record<number, number>>;
  posts: Partial<Record<number, number>>;
  pres: Partial<Record<number, number>>;
  preSauces: Partial<Record<number, number>>;
  sauceTypes: Partial<Record<number, number>>;
  titles: Partial<Record<number, number>>;
  complements: Partial<Record<number, number>>;
};

export type CompiledTheme = {
  id: ThemeId;
  nom: string;
  weights: CompiledThemeWeights;
};
