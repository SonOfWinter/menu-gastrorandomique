import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { TypeAliment } from '@/types/enums/type-aliment';

export type Lien = DeepReadonly<{
  id: string;
  noms: NomForms;
  suite: TypeDeterminant;
  compatibleIngredientTypes: TypeAliment[];
}>
