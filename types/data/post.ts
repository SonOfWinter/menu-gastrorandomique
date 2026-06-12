import { DeepReadonly } from '@/types/common/deep-readonly';
import { EntityId } from '@/types/entity-id';
import { TypePlat } from '@/types/enums/type-plat';
import { Theme } from '@/types/enums/theme';

export type Post = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  themes?: Theme[];
  unthemedOnly?: boolean;
  themeCompatibilityMask?: number;
  nom: string;
  types: TypePlat[];
  compatibilityMask?: number;
}>
