import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { EntityId } from '@/types/entity-id';
import { TypeAliment } from '@/types/enums/type-aliment';
import { Theme } from '@/types/enums/theme';

export type Adjectif = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  themes?: Theme[];
  unthemedOnly?: boolean;
  themeCompatibilityMask?: number;
  noms: NomForms;
  types: TypeAliment[];
  compatibilityMask?: number;
}>
