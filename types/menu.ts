export enum TypeAliment {
  Legume = 'legume',
  Fruit = 'fruit',
  Vianderouge = 'vianderouge',
  Viandeblanche = 'viandeblanche',
  Poisson = 'poisson',
  Fruitdemer = 'fruitdemer',
  Champignon = 'champignon',
  Sauce = 'sauce',
  Salade = 'salade',
  Base = 'base',
  Soft = 'soft',
  Alcool = 'alcool',
  Fromage = 'fromage',
  Liquide = 'liquide',
  Fruitacoque = 'fruitacoque',
  Sucre = 'sucre',
  Cereale = 'cereale'
}

export enum Genre {
  Feminin = 'f',
  Masculin = 'm',
}

export enum Nombre {
  Singulier = 's',
  Pluriel = 'p',
}

export enum TypePlat {
  Entree = 'entree',
  Plat = 'plat',
  Dessert = 'dessert'
}

export type TypeSuite = 'determinantPrincipal' | 'determinantSecondaire' | 'adjectifPossessif';
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
  determinantPrincipal: string,
  determinantSecondaire: string,
  adjectifPossessif: string,
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
  suite: TypeSuite;
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
