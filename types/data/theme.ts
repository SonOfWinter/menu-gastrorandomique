import { Theme } from '@/types/enums/theme';

export type ThemePalette = {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
};

export type CompiledTheme = {
  id: Theme;
  nom: string;
  compatibilityMask: number;
  palette: ThemePalette;
};
