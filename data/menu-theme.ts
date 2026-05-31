import { Theme } from '@/types/data/theme';

export const THEME_SOURCE_IDS = {
  HIVER: '5b2b9df0-c7cf-4d2b-94d7-a799f0d6f8c2',
  ETE: '8d68c368-8ef8-4d36-8d7b-279339186a5e',
  PRINTEMPS: 'eeccac1f-b1ef-4815-8698-714a5cf4abf4',
  AUTOMNE: '227d2e2c-4665-47c5-bd08-734e8acdfeb1',
  MEDIEVAL: 'f9c3fbb0-fce2-41f3-b97e-f6e496bcd4ec',
  RENAISSANCE: 'f260be05-718a-4878-b009-cad51a26c11a',
} as const;

const themes: Theme[] = [
  {
    id: THEME_SOURCE_IDS.HIVER,
    nom: 'Hiver',
  },
  {
    id: THEME_SOURCE_IDS.ETE,
    nom: 'Été',
  },
  {
    id: THEME_SOURCE_IDS.PRINTEMPS,
    nom: 'Printemps',
  },
  {
    id: THEME_SOURCE_IDS.AUTOMNE,
    nom: 'Automne',
  },
  {
    id: THEME_SOURCE_IDS.MEDIEVAL,
    nom: 'Médiéval',
  },
  {
    id: THEME_SOURCE_IDS.RENAISSANCE,
    nom: 'Renaissance',
  },
];

export default themes;
