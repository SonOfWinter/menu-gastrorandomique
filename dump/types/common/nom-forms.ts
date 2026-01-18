import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';

export type NomForms = Record<Genre, Record<Nombre, string>>
