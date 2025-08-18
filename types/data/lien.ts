import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { TypeDeterminant } from '@/types/enums/type-determinant';

export type Lien = DeepReadonly<{
  id: string;
  noms: NomForms;
  suite: TypeDeterminant;
}>
