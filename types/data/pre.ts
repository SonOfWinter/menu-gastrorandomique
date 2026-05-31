import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { EntityId } from '@/types/entity-id';
import { TypePlat } from '@/types/enums/type-plat';

export type Pre = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  themeIds?: EntityId[];
  noms: NomForms;
  types: TypePlat[];
  compatibilityMask?: number;
}>
