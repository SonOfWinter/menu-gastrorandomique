export type TypeAliment =
  'vide'
  | 'legume'
  | 'fruit'
  | 'vianderouge'
  | 'viandeblanche'
  | 'poisson'
  | 'fruitdemer'
  | 'champignon'
  | 'sauce'
  | 'salade'
  | 'base'
  | 'soft'
  | 'alcool'
  | 'fromage'
  | 'liquide'
  | 'fruitacoque'
  | 'sucre'
  | 'cereale';
export type Genre = 'f' | 'm';
export type Nombre = 's' | 'p';
export const TYPE_ENTREE = 'entree';
export const TYPE_PLAT = 'plat';
export const TYPE_DESSERT = 'dessert';
export type TypePlat = 'entree' | 'plat' | 'dessert';
export type TypeSuite = 'determimantPrincipal' | 'determinantSecondaire' | 'adjectifPossessif';
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
}


// Tables

export type Ingredient = {
  id: string;
  nom: string,
  genre: Genre,
  nombre: Nombre,
  types: TypeAliment[],
  determimantPrincipal: string,
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
