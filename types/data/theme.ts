import { Theme } from '@/types/enums/theme';

export type CompiledTheme = {
  id: Theme;
  nom: string;
  compatibilityMask: number;
};
