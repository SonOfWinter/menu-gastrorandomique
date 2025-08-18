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

export type NomProps = 'nom_m_s' | 'nom_m_p' | 'nom_f_s' | 'nom_f_p';

export type DisplayMenu = {
  price: number;
  title: string;
  complement: string;
  entree: Dish;
  plat: Dish;
  dessert: Dish;
}

export type Dish = {
  main: string;
  second: string;
  sauce?: string;
}


// Tables

export type Ingredient = {
  id: string;
  nom: string,
  genre: Genre,
  nombre: Nombre,
  types: TypeAliment[],
  determinants: Record<TypeDeterminant, string>
}

export type Plat = {
  id: string;
  nom: string,
  genre: Genre,
  nombre: Nombre,
  types: TypePlat[],
  entree: TypeAliment[],
  plat: TypeAliment[],
  dessert: TypeAliment[],
}

export type Adjectif = {
  id: string;
  nom_m_s: string,
  nom_m_p: string,
  nom_f_s: string,
  nom_f_p: string,
  types: TypeAliment[],
}

export type Pre = {
  id: string;
  nom_m_s: string,
  nom_m_p: string,
  nom_f_s: string,
  nom_f_p: string,
  types: TypePlat[],
}

export type Post = {
  id: string;
  nom: string,
  types: TypePlat[]
}

export type Lien = {
  id: string;
  nom_m_s: string;
  nom_m_p: string;
  nom_f_s: string;
  nom_f_p: string;
  suite: TypeDeterminant;
}

export type Title = {
  id: string;
  nom: string;
}

export type Complement = {
  id: string;
  nom: string;
}

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
