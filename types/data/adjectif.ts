import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { TypeAliment } from '@/types/enums/type-aliment';

export type Adjectif = DeepReadonly<{
  id: string;
  noms: NomForms;
  types: TypeAliment[];
}>
