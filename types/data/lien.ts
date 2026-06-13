import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { EntityId } from '@/types/entity-id';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { TypeAliment } from '@/types/enums/type-aliment';
import { Theme } from '@/types/enums/theme';

export type Lien = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  themes?: Theme[];
  unthemedOnly?: boolean;
  themeCompatibilityMask?: number;
  noms: NomForms;
  suite: TypeDeterminant;
  compatibleIngredientTypes: TypeAliment[];
  acceptedCompatibilityMask?: number;
}>
