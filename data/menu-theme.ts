import { Theme } from '@/types/data/theme';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';

const themes: Theme[] = [
  {
    id: 'hiver',
    nom: 'Hiver',
    weights: {
      typeAliments: {
        [TypeAliment.CHAMPIGNON]: 2,
        [TypeAliment.FROMAGE]: 2,
        [TypeAliment.VIANDE_ROUGE]: 2,
        [TypeAliment.CEREALE]: 1.5,
        [TypeAliment.SUCRE]: 1.4,
      },
      typePlats: {
        [TypePlat.PLAT]: 1.4,
        [TypePlat.DESSERT]: 1.2,
      },
    },
  },
  {
    id: 'ete',
    nom: 'Été',
    weights: {
      typeAliments: {
        [TypeAliment.FRUIT]: 2,
        [TypeAliment.SALADE]: 2,
        [TypeAliment.LEGUME]: 1.6,
        [TypeAliment.HERBE]: 1.5,
        [TypeAliment.SOFT]: 1.4,
      },
      typePlats: {
        [TypePlat.ENTREE]: 1.3,
        [TypePlat.DESSERT]: 1.3,
      },
    },
  },
  {
    id: 'printemps',
    nom: 'Printemps',
    weights: {
      typeAliments: {
        [TypeAliment.HERBE]: 2,
        [TypeAliment.LEGUME]: 1.7,
        [TypeAliment.SALADE]: 1.6,
        [TypeAliment.FROMAGE]: 1.3,
        [TypeAliment.FRUIT]: 1.2,
      },
      typePlats: {
        [TypePlat.ENTREE]: 1.4,
      },
    },
  },
  {
    id: 'automne',
    nom: 'Automne',
    weights: {
      typeAliments: {
        [TypeAliment.CHAMPIGNON]: 2.2,
        [TypeAliment.FRUIT_A_COQUE]: 2,
        [TypeAliment.FRUIT]: 1.5,
        [TypeAliment.VIANDE_BLANCHE]: 1.3,
        [TypeAliment.EPICE]: 1.3,
      },
      typePlats: {
        [TypePlat.PLAT]: 1.3,
      },
    },
  },
  {
    id: 'medieval',
    nom: 'Médiéval',
    weights: {
      typeAliments: {
        [TypeAliment.VIANDE_ROUGE]: 2,
        [TypeAliment.VIANDE_BLANCHE]: 1.7,
        [TypeAliment.CEREALE]: 1.5,
        [TypeAliment.EPICE]: 1.5,
        [TypeAliment.ALCOOL]: 1.4,
      },
      typePlats: {
        [TypePlat.PLAT]: 1.5,
      },
    },
  },
  {
    id: 'renaissance',
    nom: 'Renaissance',
    weights: {
      typeAliments: {
        [TypeAliment.FRUIT]: 1.7,
        [TypeAliment.SUCRE]: 1.6,
        [TypeAliment.ALCOOL]: 1.5,
        [TypeAliment.EPICE]: 1.4,
        [TypeAliment.FRUIT_DE_MER]: 1.3,
      },
      typePlats: {
        [TypePlat.ENTREE]: 1.2,
        [TypePlat.DESSERT]: 1.4,
      },
    },
  },
];

export default themes;
