import { DeepReadonly } from '@/types/common/deep-readonly';
import { EntityId } from '@/types/entity-id';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { Theme } from '@/types/enums/theme';

export type Ingredient = DeepReadonly<{
  id: EntityId;
  sourceId?: string;
  themes?: Theme[];
  themeCompatibilityMask?: number,
  nom: string,
  genre: Genre,
  nombre: Nombre,
  types: TypeAliment[],
  compatibilityMask?: number,
  isSpicy?: boolean,
  postAdjectifs?: string[],
  determinants: Record<TypeDeterminant, string>
}>
