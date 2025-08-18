import { DeepReadonly } from '@/types/common/deep-readonly';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypePlat } from '@/types/enums/type-plat';
import { TypeAliment } from '@/types/enums/type-aliment';

export type Plat = DeepReadonly<{
  id: string;
  nom: string;
  genre: Genre;
  nombre: Nombre;
  types: TypePlat[];
  typeAliments: Record<TypePlat, TypeAliment[]>
}>
