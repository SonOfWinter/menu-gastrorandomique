import { PreSauce } from '@/types/data/pre-sauce';
import { Nombre } from '@/types/enums/nombre';
import { Genre } from '@/types/enums/genre';
import { TypeDeterminant } from '@/types/enums/type-determinant';

const preSauces: PreSauce[] = [
  {
    id: '33023faa-abcb-4c56-9e08-a5d35c69ba16',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'avec', [Nombre.PLURIEL]: 'avec' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'avec', [Nombre.PLURIEL]: 'avec' },
    },
    suite: TypeDeterminant.POSSESSIF,
  },
  {
    id: '0d1b43c7-3a67-4c0c-87a4-8e59e53b9181',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'accompagné', [Nombre.PLURIEL]: 'accompagnés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'accompagnée', [Nombre.PLURIEL]: 'accompagnées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: '46e925e1-843c-4218-bb58-85d5d9c16b34',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'rehaussé', [Nombre.PLURIEL]: 'rehaussés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'rehaussée', [Nombre.PLURIEL]: 'rehaussées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: '5f38c14a-2698-4e63-a36f-2d3fb5811c77',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'nappé', [Nombre.PLURIEL]: 'nappés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'nappée', [Nombre.PLURIEL]: 'nappées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: '2caa88b9-d81e-4c63-b2cf-5d7f5f2dc65d',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'parfumé', [Nombre.PLURIEL]: 'parfumés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'parfumée', [Nombre.PLURIEL]: 'parfumées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: 'a4f6ed0d-ef9c-4a4f-9689-1f6b0a37d329',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'agrémenté', [Nombre.PLURIEL]: 'agrémentés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'agrémentée', [Nombre.PLURIEL]: 'agrémentées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: 'e72c8442-2d6e-4a35-914c-2c33e4a6c902',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'relevé', [Nombre.PLURIEL]: 'relevés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'relevée', [Nombre.PLURIEL]: 'relevées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: 'cd432ca9-2493-42e3-8928-1dfc29e3f16c',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'arrosé', [Nombre.PLURIEL]: 'arrosés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'arrosée', [Nombre.PLURIEL]: 'arrosées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: '21c142d8-184b-47dd-9d6d-0d9e80a5b51d',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'enrobé', [Nombre.PLURIEL]: 'enrobés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'enrobée', [Nombre.PLURIEL]: 'enrobées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: '0daa2ac8-3bb2-4fd8-bb1f-dc5c42997de5',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'baigné', [Nombre.PLURIEL]: 'baignés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'baignée', [Nombre.PLURIEL]: 'baignées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: '9d6f2c2a-ed99-4d76-90f5-443b58929c25',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'tartiné', [Nombre.PLURIEL]: 'tartinés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'tartinée', [Nombre.PLURIEL]: 'tartinées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: '0ccc290a-3111-4896-b993-d76425b66914',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'escorté', [Nombre.PLURIEL]: 'escortés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'escortée', [Nombre.PLURIEL]: 'escortées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: '017d2473-4096-4486-8dca-d78bfe54f8a3',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'glacé', [Nombre.PLURIEL]: 'glacés' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'glacée', [Nombre.PLURIEL]: 'glacées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
  {
    id: 'a0aad96f-1fe2-4386-aac8-e74b8bd7776d',
    noms: {
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'laqué', [Nombre.PLURIEL]: 'laqués' },
      [Genre.FEMININ]: { [Nombre.SINGULIER]: 'laquée', [Nombre.PLURIEL]: 'laquées' },
    },
    suite: TypeDeterminant.INDEFINI,
  },
];
export default preSauces;
