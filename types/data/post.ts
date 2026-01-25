import { DeepReadonly } from '@/types/common/deep-readonly';
import { TypePlat } from '@/types/enums/type-plat';

export type Post = DeepReadonly<{
  id: string;
  nom: string;
  types: TypePlat[];
}>
