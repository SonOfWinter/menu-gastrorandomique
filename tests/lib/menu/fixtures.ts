import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { TypePlat } from '@/types/enums/type-plat';
import { Menu } from '@/types/menu';
import { Ingredient } from '@/types/data/ingredient';
import { Adjectif } from '@/types/data/adjectif';
import { Plat } from '@/types/data/plat';
import { Lien } from '@/types/data/lien';
import { Pre } from '@/types/data/pre';
import { Post } from '@/types/data/post';
import { PreSauce } from '@/types/data/pre-sauce';
import { SauceType } from '@/types/data/sauce-type';

export const ingredientOne: Ingredient = {
  id: 'ing-1',
  nom: 'pomme',
  genre: Genre.FEMININ,
  nombre: Nombre.SINGULIER,
  types: [TypeAliment.FRUIT],
  determinants: {
    [TypeDeterminant.PRINCIPAL]: 'de',
    [TypeDeterminant.SECONDAIRE]: 'de la',
    [TypeDeterminant.POSSESSIF]: 'sa',
    [TypeDeterminant.INDEFINI]: 'une',
  },
};

export const ingredientTwo: Ingredient = {
  id: 'ing-2',
  nom: 'poire',
  genre: Genre.FEMININ,
  nombre: Nombre.SINGULIER,
  types: [TypeAliment.FRUIT],
  determinants: {
    [TypeDeterminant.PRINCIPAL]: 'de',
    [TypeDeterminant.SECONDAIRE]: 'de la',
    [TypeDeterminant.POSSESSIF]: 'sa',
    [TypeDeterminant.INDEFINI]: 'une',
  },
};

export const adjectifOne: Adjectif = {
  id: 'adj-1',
  noms: {
    [Genre.FEMININ]: { [Nombre.SINGULIER]: 'sucree', [Nombre.PLURIEL]: 'sucrees' },
    [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'sucre', [Nombre.PLURIEL]: 'sucres' },
  },
  types: [TypeAliment.FRUIT],
};

export const adjectifTwo: Adjectif = {
  id: 'adj-2',
  noms: {
    [Genre.FEMININ]: { [Nombre.SINGULIER]: 'croquante', [Nombre.PLURIEL]: 'croquantes' },
    [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'croquant', [Nombre.PLURIEL]: 'croquants' },
  },
  types: [TypeAliment.FRUIT],
};

export const plat: Plat = {
  id: 'plat-1',
  nom: 'tarte',
  genre: Genre.FEMININ,
  nombre: Nombre.SINGULIER,
  types: [TypePlat.DESSERT],
  typeAliments: {
    [TypePlat.ENTREE]: [TypeAliment.FRUIT],
    [TypePlat.PLAT]: [TypeAliment.FRUIT],
    [TypePlat.DESSERT]: [TypeAliment.FRUIT],
  },
};

export const lien: Lien = {
  id: 'lien-1',
  noms: {
    [Genre.FEMININ]: { [Nombre.SINGULIER]: 'au', [Nombre.PLURIEL]: 'aux' },
    [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'au', [Nombre.PLURIEL]: 'aux' },
  },
  suite: TypeDeterminant.SECONDAIRE,
};

export const pre: Pre = {
  id: 'pre-1',
  noms: {
    [Genre.FEMININ]: { [Nombre.SINGULIER]: 'a la', [Nombre.PLURIEL]: 'aux' },
    [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'au', [Nombre.PLURIEL]: 'aux' },
  },
  types: [TypePlat.DESSERT],
};

export const post: Post = {
  id: 'post-1',
  nom: 'maison',
  types: [TypePlat.DESSERT],
};

export const preSauce: PreSauce = {
  id: 'pre-sauce-1',
  noms: {
    [Genre.FEMININ]: { [Nombre.SINGULIER]: 'sauce', [Nombre.PLURIEL]: 'sauces' },
    [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'sauce', [Nombre.PLURIEL]: 'sauces' },
  },
  suite: TypeDeterminant.PRINCIPAL,
};

export const sauceType: SauceType = {
  id: 'sauce-type-1',
  nom: 'caramel',
  genre: Genre.MASCULIN,
  nombre: Nombre.SINGULIER,
  types: [TypePlat.DESSERT],
  determinants: {
    [TypeDeterminant.PRINCIPAL]: 'de',
    [TypeDeterminant.SECONDAIRE]: 'du',
    [TypeDeterminant.POSSESSIF]: 'son',
    [TypeDeterminant.INDEFINI]: 'un',
  },
  suite: TypeDeterminant.PRINCIPAL,
  compatibleIngredientTypes: null,
};

export const menuData: Menu = {
  adjectifs: [adjectifOne, adjectifTwo],
  complements: [{ id: 'comp-1', nom: 'du chef' }],
  ingredients: [ingredientOne, ingredientTwo],
  liens: [lien],
  plats: [plat],
  titles: [{ id: 'title-1', nom: 'menu' }],
  posts: [post],
  pres: [pre],
  preSauces: [preSauce],
  sauceTypes: [sauceType],
};
