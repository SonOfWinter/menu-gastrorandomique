import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { EntityId } from '@/types/entity-id';
import { TypeAliment } from '@/types/enums/type-aliment';

export type Adjectif = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  themeIds?: EntityId[];
  noms: NomForms;
  types: TypeAliment[];
  compatibilityMask?: number;
}>
