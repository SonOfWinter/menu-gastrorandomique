import { DeepReadonly } from '@/types/common/deep-readonly';
import { EntityId } from '@/types/entity-id';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypePlat } from '@/types/enums/type-plat';
import { TypeAliment } from '@/types/enums/type-aliment';

export type Plat = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  nom: string;
  genre: Genre;
  nombre: Nombre;
  types: TypePlat[];
  compatibilityMask?: number;
  typeAliments: Record<TypePlat, TypeAliment[]>
  typeAlimentMasks?: Record<TypePlat, number>
}>
