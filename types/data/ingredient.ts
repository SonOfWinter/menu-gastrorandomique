import { DeepReadonly } from '@/types/common/deep-readonly';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypeDeterminant } from '@/types/enums/type-determinant';

export type Ingredient = DeepReadonly<{
  id: string;
  nom: string,
  genre: Genre,
  nombre: Nombre,
  types: TypeAliment[],
  determinants: Record<TypeDeterminant, string>
}>
