import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { TypePlat } from '@/types/enums/type-plat';

export type SauceType = {
  id: string;
  nom: string;
  genre: Genre,
  nombre: Nombre,
  types: TypePlat[];
  determinants: Record<TypeDeterminant, string>;
  suite: TypeDeterminant;
}
