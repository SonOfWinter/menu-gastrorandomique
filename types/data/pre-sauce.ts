import { DeepReadonly } from '@/types/common/deep-readonly';
import { TypePlat } from '@/types/enums/type-plat';
import { NomForms } from '@/types/common/nom-forms';
import { TypeDeterminant } from '@/types/enums/type-determinant';

export type PreSauce = DeepReadonly<{
  id: string;
  noms: NomForms;
  types: TypePlat[];
  suite: TypeDeterminant | null;
}>
