import { TypePlat } from '@/types/enums/type-plat';
import { PreSauce } from '@/types/data/pre-sauce';
import { Nombre } from '@/types/enums/nombre';
import { Genre } from '@/types/enums/genre';
import { TypeDeterminant } from '@/types/enums/type-determinant';

const preSauces: PreSauce[] = [
  {
    id: '33023faa-abcb-4c56-9e08-a5d35c69ba16',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'avec ça sauce',
        [Nombre.PLURIEL]: 'avec ça sauce',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'avec ça sauce',
        [Nombre.PLURIEL]: 'avec ça sauce',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.PLAT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: '33023faa-abcb-4c56-9e08-a5d35c69ba16',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'avec son coulis',
        [Nombre.PLURIEL]: 'avec son coulis',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'avec son coulis',
        [Nombre.PLURIEL]: 'avec son coulis',
      },
    },
    types: [TypePlat.DESSERT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: '7b467604-b67f-475a-aa9a-05bcff93f01c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'avec son chutney',
        [Nombre.PLURIEL]: 'avec son chutney',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'avec son chutney',
        [Nombre.PLURIEL]: 'avec son chutney',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.PLAT, TypePlat.DESSERT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: '0d1b43c7-3a67-4c0c-87a4-8e59e53b9181',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'accompagné de sa sauce',
        [Nombre.PLURIEL]: 'accompagnés de sa sauce',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'accompagnée de sa sauce',
        [Nombre.PLURIEL]: 'accompagnées de sa sauce',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.PLAT],
    suite: null,
  },
  {
    id: 'b02941d7-fef2-4f2d-b94b-dcd2869f09bc',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'accompagné de sa fermentation',
        [Nombre.PLURIEL]: 'accompagnés de sa fermentation',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'accompagnée de sa fermentation',
        [Nombre.PLURIEL]: 'accompagnées de sa fermentation',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.PLAT],
    suite: null,
  },
  {
    id: '46e925e1-843c-4218-bb58-85d5d9c16b34',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rehaussé d’un filet',
        [Nombre.PLURIEL]: 'rehaussés d’un filet',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rehaussée d’un filet',
        [Nombre.PLURIEL]: 'rehaussées d’un filet',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.PLAT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: '5f38c14a-2698-4e63-a36f-2d3fb5811c77',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'nappé',
        [Nombre.PLURIEL]: 'nappés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'nappée',
        [Nombre.PLURIEL]: 'nappées',
      },
    },
    types: [TypePlat.PLAT, TypePlat.DESSERT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: '2caa88b9-d81e-4c63-b2cf-5d7f5f2dc65d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'parfumé d’un jus',
        [Nombre.PLURIEL]: 'parfumés d’un jus',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'parfumée d’un jus',
        [Nombre.PLURIEL]: 'parfumées d’un jus',
      },
    },
    types: [TypePlat.PLAT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: 'a4f6ed0d-ef9c-4a4f-9689-1f6b0a37d329',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'agrémenté d’un coulis',
        [Nombre.PLURIEL]: 'agrémentés d’un coulis',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'agrémentée d’un coulis',
        [Nombre.PLURIEL]: 'agrémentées d’un coulis',
      },
    },
    types: [TypePlat.DESSERT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: 'e72c8442-2d6e-4a35-914c-2c33e4a6c902',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'relevé d’une émulsion',
        [Nombre.PLURIEL]: 'relevés d’une émulsion',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'relevée d’une émulsion',
        [Nombre.PLURIEL]: 'relevées d’une émulsion',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.PLAT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: 'cd432ca9-2493-42e3-8928-1dfc29e3f16c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'arrosé d’un sirop',
        [Nombre.PLURIEL]: 'arrosés d’un sirop',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'arrosée d’un sirop',
        [Nombre.PLURIEL]: 'arrosées d’un sirop',
      },
    },
    types: [TypePlat.DESSERT],
    suite: TypeDeterminant.PRINCIPAL,
  },
  {
    id: '21c142d8-184b-47dd-9d6d-0d9e80a5b51d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'enrobé d’une crème',
        [Nombre.PLURIEL]: 'enrobés d’une crème',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'enrobée d’une crème',
        [Nombre.PLURIEL]: 'enrobées d’une crème',
      },
    },
    types: [TypePlat.PLAT, TypePlat.DESSERT],
    suite: TypeDeterminant.PRINCIPAL,
  },
];
export default preSauces;

// TODO séparer les phrase et type de sauce
// phrase : avec sa / accompagné de sa / rehaussé d’un / nappé / parfumé d’un / agrémenté d’un / relevé d’une / arrosé d’un / enrobé d’une
// type de sauce : sauce / coulis / filet / jus / émulsion / sirop / crème / chutney / compotée / confit / réduction / espuma / velouté / dip / dressing / marinade / gremolata / persillade / tapenade / pesto
