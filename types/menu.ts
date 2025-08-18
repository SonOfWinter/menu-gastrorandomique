export type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>
}
export enum TypeAliment {
  LEGUME = 'legume',
  FRUIT = 'fruit',
  VIANDE_ROUGE = 'viande rouge',
  VIANDE_BLANCHE = 'viande blanche',
  POISSON = 'poisson',
  FRUIT_DE_MER = 'fruit de mer',
  CHAMPIGNON = 'champignon',
  SAUCE = 'sauce',
  SALADE = 'salade',
  BASE = 'base',
  SOFT = 'soft',
  ALCOOL = 'alcool',
  FROMAGE = 'fromage',
  LIQUIDE = 'liquide',
  FRUIT_A_COQUE = 'fruit a coque',
  SUCRE = 'sucre',
  CEREALE = 'cereale'
}

export enum Genre {
  FEMININ = 'f',
  MASCULIN = 'm',
}

export enum Nombre {
  SINGULIER = 's',
  PLURIEL = 'p',
}

export enum TypePlat {
  ENTREE = 'entree',
  PLAT = 'plat',
  DESSERT = 'dessert'
}

export enum TypeDeterminant {
  PRINCIPAL = 'principal',
  SECONDAIRE = 'secondaire',
  POSSESSIF = 'possessif',
}

export type NomForms = Record<Genre, Record<Nombre, string>>

export type DisplayMenu = DeepReadonly<{
  price: number;
  title: string;
  complement: string;
  entree: Dish;
  plat: Dish;
  dessert: Dish;
}>

export type Dish = DeepReadonly<{
  main: string;
  second: string;
  sauce?: string;
}>


// Tables

export type Ingredient = DeepReadonly<{
  id: string;
  nom: string,
  genre: Genre,
  nombre: Nombre,
  types: TypeAliment[],
  determinants: Record<TypeDeterminant, string>
}>

export type Plat = DeepReadonly<{
  id: string;
  nom: string;
  genre: Genre;
  nombre: Nombre;
  types: TypePlat[];
  typeAliments: Record<TypePlat, TypeAliment[]>
}>

export type Adjectif = DeepReadonly<{
  id: string;
  noms: NomForms;
  types: TypeAliment[];
}>

export type Pre = DeepReadonly<{
  id: string;
  noms: NomForms;
  types: TypePlat[];
}>

export type Post = DeepReadonly<{
  id: string;
  nom: string;
  types: TypePlat[];
}>

export type Lien = DeepReadonly<{
  id: string;
  noms: NomForms;
  suite: TypeDeterminant;
}>

export type Title = DeepReadonly<{
  id: string;
  nom: string;
}>

export type Complement = DeepReadonly<{
  id: string;
  nom: string;
}>

export interface Menu {
  ingredients: Ingredient[];
  plats: Plat[];
  adjectifs: Adjectif[];
  pres: Pre[];
  posts: Post[];
  liens: Lien[];
  titles: Title[];
  complements: Complement[];
}
