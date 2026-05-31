export enum Theme {
  HIVER = 'hiver',
  ETE = 'ete',
  PRINTEMPS = 'printemps',
  AUTOMNE = 'automne',
  MEDIEVAL = 'medieval',
  RENAISSANCE = 'renaissance',
}

export const THEME_BITS: Record<Theme, number> = {
  [Theme.HIVER]: 1 << 0,
  [Theme.ETE]: 1 << 1,
  [Theme.PRINTEMPS]: 1 << 2,
  [Theme.AUTOMNE]: 1 << 3,
  [Theme.MEDIEVAL]: 1 << 4,
  [Theme.RENAISSANCE]: 1 << 5,
};

export const THEME_LABELS: Record<Theme, string> = {
  [Theme.HIVER]: 'Hiver',
  [Theme.ETE]: 'Été',
  [Theme.PRINTEMPS]: 'Printemps',
  [Theme.AUTOMNE]: 'Automne',
  [Theme.MEDIEVAL]: 'Médiéval',
  [Theme.RENAISSANCE]: 'Renaissance',
};
