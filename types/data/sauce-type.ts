import { EntityId } from '@/types/entity-id';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { TypePlat } from '@/types/enums/type-plat';
import { TypeAliment } from '@/types/enums/type-aliment';
import { Theme } from '@/types/enums/theme';

export type SauceType = {
  id: EntityId;
  sourceId?: string;
  themes?: Theme[];
  unthemedOnly?: boolean;
  themeCompatibilityMask?: number;
  nom: string;
  genre: Genre,
  nombre: Nombre,
  types: TypePlat[];
  compatibilityMask?: number;
  determinants: Record<TypeDeterminant, string>;
  suite: TypeDeterminant;
  compatibleIngredientTypes: TypeAliment[] | null;
  acceptedCompatibilityMask?: number;

}
