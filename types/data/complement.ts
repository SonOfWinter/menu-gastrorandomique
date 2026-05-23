import { DeepReadonly } from '@/types/common/deep-readonly';
import { EntityId } from '@/types/entity-id';

export type Complement = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  nom: string;
}>
