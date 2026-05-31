import { DeepReadonly } from '@/types/common/deep-readonly';
import { EntityId } from '@/types/entity-id';
import { Theme } from '@/types/enums/theme';

export type Title = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  themes?: Theme[];
  themeCompatibilityMask?: number;
  nom: string;
}>
