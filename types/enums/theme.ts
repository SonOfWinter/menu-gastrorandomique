export enum Theme {
  HIVER = 'hiver',
  ETE = 'ete',
  PRINTEMPS = 'printemps',
  AUTOMNE = 'automne',
  MEDIEVAL = 'medieval',
}

export const THEME_BITS: Record<Theme, number> = {
  [Theme.HIVER]: 1 << 0,
  [Theme.ETE]: 1 << 1,
  [Theme.PRINTEMPS]: 1 << 2,
  [Theme.AUTOMNE]: 1 << 3,
  [Theme.MEDIEVAL]: 1 << 4,
};

export const THEME_LABELS: Record<Theme, string> = {
  [Theme.HIVER]: 'Hiver',
  [Theme.ETE]: 'Été',
  [Theme.PRINTEMPS]: 'Printemps',
  [Theme.AUTOMNE]: 'Automne',
  [Theme.MEDIEVAL]: 'Médiéval',
};

type ThemePaletteDefinition = {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
};

export const DEFAULT_THEME_PALETTE: ThemePaletteDefinition = {
  primary: '#053225',
  primaryForeground: '#FFFFFF',
  secondary: '#F58549',
  secondaryForeground: '#1F140F',
};

export const THEME_PALETTES: Record<Theme, ThemePaletteDefinition> = {
  [Theme.HIVER]: {
    primary: '#6AB7D6',
    primaryForeground: '#062533',
    secondary: '#335C81',
    secondaryForeground: '#FFFFFF',
  },
  [Theme.ETE]: {
    primary: '#F2C94C',
    primaryForeground: '#2B2200',
    secondary: '#FF8A3D',
    secondaryForeground: '#2B1400',
  },
  [Theme.PRINTEMPS]: {
    primary: '#4F9D69',
    primaryForeground: '#FFFFFF',
    secondary: '#F3A7B8',
    secondaryForeground: '#321018',
  },
  [Theme.AUTOMNE]: {
    primary: '#C86B2C',
    primaryForeground: '#FFFFFF',
    secondary: '#F0A84F',
    secondaryForeground: '#2C1605',
  },
  [Theme.MEDIEVAL]: {
    primary: '#6F7478',
    primaryForeground: '#FFFFFF',
    secondary: '#9E2F2F',
    secondaryForeground: '#FFFFFF',
  },
};
