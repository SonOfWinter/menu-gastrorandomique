import { Theme } from '@/types/enums/theme';

export const themePresets = {
  allSeasons: [
    Theme.HIVER,
    Theme.ETE,
    Theme.PRINTEMPS,
    Theme.AUTOMNE,
  ],
  summerAndSpring: [
    Theme.ETE,
    Theme.PRINTEMPS,
  ],
  winterAutumnAndMedieval: [
    Theme.HIVER,
    Theme.AUTOMNE,
    Theme.MEDIEVAL,
  ],
  winterSpringAutumnAndMedieval: [
    Theme.HIVER,
    Theme.PRINTEMPS,
    Theme.AUTOMNE,
    Theme.MEDIEVAL,
  ],
  medievalSummerSpringAndAutumn: [
    Theme.MEDIEVAL,
    Theme.ETE,
    Theme.PRINTEMPS,
    Theme.AUTOMNE,
  ],
} satisfies Record<string, Theme[]>;
