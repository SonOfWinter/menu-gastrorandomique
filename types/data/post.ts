import { DeepReadonly } from '@/types/common/deep-readonly';
import { EntityId } from '@/types/entity-id';
import { TypePlat } from '@/types/enums/type-plat';

export type Post = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  themeIds?: EntityId[];
  nom: string;
  types: TypePlat[];
  compatibilityMask?: number;
}>
