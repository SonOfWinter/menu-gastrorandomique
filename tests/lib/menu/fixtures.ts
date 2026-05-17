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
import { Title } from '@/types/data/title';
import { Complement } from '@/types/data/complement';
import { MenuIndexes } from '@/types/menu-indexes';

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
    [TypeDeterminant.INDEFINI]: 'd’une',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'une',
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
    [TypeDeterminant.INDEFINI]: 'd’une',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'une',
  },
};

export const sauceIngredient: Ingredient = {
  id: 'ing-sauce',
  nom: 'oignon',
  genre: Genre.MASCULIN,
  nombre: Nombre.SINGULIER,
  types: [TypeAliment.SAUCE],
  determinants: {
    [TypeDeterminant.PRINCIPAL]: 'd’',
    [TypeDeterminant.SECONDAIRE]: 'de l’',
    [TypeDeterminant.POSSESSIF]: 'son',
    [TypeDeterminant.INDEFINI]: 'd’un',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'un',
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
  compatibleIngredientTypes: [TypeAliment.FRUIT],
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
    [TypeDeterminant.INDEFINI]: 'd’un',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'un',
  },
  suite: TypeDeterminant.PRINCIPAL,
  compatibleIngredientTypes: null,
};

type MenuDataSource = {
  adjectifs: Adjectif[];
  complements: Complement[];
  ingredients: Ingredient[];
  liens: Lien[];
  plats: Plat[];
  titles: Title[];
  posts: Post[];
  pres: Pre[];
  preSauces: PreSauce[];
  sauceTypes: SauceType[];
};

const baseMenuDataSource: MenuDataSource = {
  adjectifs: [adjectifOne, adjectifTwo],
  complements: [{ id: 'comp-1', nom: 'du chef' }],
  ingredients: [ingredientOne, ingredientTwo, sauceIngredient],
  liens: [lien],
  plats: [plat],
  titles: [{ id: 'title-1', nom: 'menu' }],
  posts: [post],
  pres: [pre],
  preSauces: [preSauce],
  sauceTypes: [sauceType],
};

function buildIndex<TItem, TType extends string>(
  items: TItem[],
  types: TType[],
  getTypes: (item: TItem) => readonly TType[] | null,
): Record<TType, number[]> {
  return Object.fromEntries(
    types.map((type) => [
      type,
      items
        .map((item, index) => getTypes(item)?.includes(type) ? index : -1)
        .filter((index) => index !== -1),
    ]),
  ) as Record<TType, number[]>;
}

function buildMenuIndexes(source: MenuDataSource): MenuIndexes {
  return {
    ingredientIdsByType: buildIndex(source.ingredients, Object.values(TypeAliment), (item) => item.types),
    adjectifIdsByType: buildIndex(source.adjectifs, Object.values(TypeAliment), (item) => item.types),
    lienIdsByType: buildIndex(source.liens, Object.values(TypeAliment), (item) => item.compatibleIngredientTypes),
    platIdsByType: buildIndex(source.plats, Object.values(TypePlat), (item) => item.types),
    postIdsByType: buildIndex(source.posts, Object.values(TypePlat), (item) => item.types),
    preIdsByType: buildIndex(source.pres, Object.values(TypePlat), (item) => item.types),
    sauceTypeIdsByType: buildIndex(source.sauceTypes, Object.values(TypePlat), (item) => item.types),
  };
}

export function createMenuData(overrides: Partial<MenuDataSource> = {}): Menu {
  const source = {
    ...baseMenuDataSource,
    ...overrides,
  };

  return {
    adjectifs: source.adjectifs,
    complements: source.complements,
    ingredients: source.ingredients,
    liens: source.liens,
    plats: source.plats,
    posts: source.posts,
    pres: source.pres,
    preSauces: source.preSauces,
    sauceTypes: source.sauceTypes,
    titles: source.titles,
    indexes: buildMenuIndexes(source),
  };
}

export const menuData: Menu = createMenuData();
