import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { EntityId } from '@/types/entity-id';
import { TypeDeterminant } from '@/types/enums/type-determinant';

export type PreSauce = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  noms: NomForms;
  suite: TypeDeterminant;
}>
