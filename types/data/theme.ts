import { EntityId } from '@/types/entity-id';

export type ThemeId = EntityId;

export type Theme = {
  id: ThemeId;
  nom: string;
};

export type CompiledTheme = {
  id: number;
  sourceId: string;
  nom: string;
};
