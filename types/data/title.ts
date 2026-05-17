import { DeepReadonly } from '@/types/common/deep-readonly';
import { EntityId } from '@/types/entity-id';

export type Title = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  nom: string;
}>
