import { DeepReadonly } from '@/types/common/deep-readonly';
import { NomForms } from '@/types/common/nom-forms';
import { TypePlat } from '@/types/enums/type-plat';

export type Pre = DeepReadonly<{
  id: string;
  noms: NomForms;
  types: TypePlat[];
}>
