import { Menu } from '@/types/menu';
import capitalize from '@/lib/capitalize';
import random from '@/lib/random';
import intersection from '@/lib/intersection';
import round from '@/lib/round';
import adjectifs from '@/data/menu-adjectif';
import pres from '@/data/menu-pre';
import posts from '@/data/menu-post';
import plats from '@/data/menu-plat';
import titles from '@/data/menu-title';
import liens from '@/data/menu-lien';
import ingredients from '@/data/menu-ingredient';
import preSauces from '@/data/menu-pre-sauce';
import complements from '@/data/menu-complement';
import sauceTypes from '@/data/menu-sauce-type';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { Dish } from '@/types/dish';
import { DisplayMenu } from '@/types/display-menu';
import { Ingredient } from '@/types/data/ingredient';
import { Plat } from '@/types/data/plat';
import { Adjectif } from '@/types/data/adjectif';
import { Pre } from '@/types/data/pre';
import { Post } from '@/types/data/post';
import { Lien } from '@/types/data/lien';
import { PreSauce } from '@/types/data/pre-sauce';
import { SauceType } from '@/types/data/sauce-type';

const alreadyUsed: { ingredients: string[], adjectifs: string[] } = {
  ingredients: [],
  adjectifs: [],
};

export function getMenuData(): Menu {
  return {
    adjectifs: adjectifs,
    complements: complements,
    ingredients: ingredients,
    liens: liens,
    titles: titles,
    plats: plats,
    posts: posts,
    pres: pres,
    preSauces: preSauces,
    sauceTypes: sauceTypes,
  };
}

const getRandom = <T>(arr: T[]): T => arr[random(0, arr.length - 1)];

const isInconsistent = (inconsistentLevel: number): boolean => {
  return inconsistentLevel > 0 && random(1, 20) <= inconsistentLevel;
};

const hasRandomPart = (chance: number = 3): boolean => {
  return random(1, chance) === chance;
};

export function generateDisplayMenu(
  data: Menu,
  count: number = 1,
  inconsistentLevel: number = 0,
): DisplayMenu {
  alreadyUsed.ingredients = [];
  alreadyUsed.adjectifs = [];
  return {
    price: round(random(30.0, 250.0, true), 2),
    title: getRandom(data.titles).nom,
    complement: getRandom(data.complements).nom,
    entree: Array.from({ length: count }, () => generate(data, TypePlat.ENTREE, inconsistentLevel)),
    plat: Array.from({ length: count }, () => generate(data, TypePlat.PLAT, inconsistentLevel)),
    dessert: Array.from(
      { length: count },
      () => generate(data, TypePlat.DESSERT, inconsistentLevel),
    ),
  };
}

export const generate = (data: Menu, mainType: TypePlat, inconsistentLevel: number): Dish => {
  const platPrincipal: Plat = getPlatByType(data.plats, mainType);
  const typeAliments: TypeAliment[] = isInconsistent(inconsistentLevel)
    ? [...platPrincipal.typeAliments[mainType]]
    : Object.values(TypeAliment);
  const ingredients: Ingredient[] = typeAliments && Array.isArray(typeAliments)
    ? [...data.ingredients].filter((item: Ingredient) =>
      intersection(
        [...item.types],
        typeAliments,
      ).length > 0,
    ) : [];
  return {
    main: generateMain(data, platPrincipal, ingredients, inconsistentLevel),
    second: generateSecond(data, platPrincipal, ingredients, inconsistentLevel),
    sauce: hasRandomPart() ? generateSauce(data, platPrincipal, mainType, inconsistentLevel) : null,
  };
};

const generateMain = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
  inconsistentLevel: number,
): string => {
  let main: string = '';
  const ingredientPrincipal: Ingredient | null = getIngredient(ingredients);
  if (!ingredientPrincipal) {
    return '';
  }
  const adjectifPrincipal: Adjectif = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientPrincipal,
    inconsistentLevel,
  );
  if (hasRandomPart()) {
    const prePrincipal: Pre = getRandom(data.pres);
    main += `${prePrincipal.noms[platPrincipal.genre][platPrincipal.nombre]} `;
  }
  main += `${platPrincipal.nom} ${ingredientPrincipal.determinants[TypeDeterminant.PRINCIPAL]}`;
  if (!ingredientPrincipal.determinants[TypeDeterminant.PRINCIPAL].endsWith('\'')) {
    main += ' ';
  }
  main += `${ingredientPrincipal.nom} ${adjectifPrincipal.noms[ingredientPrincipal.genre][ingredientPrincipal.nombre]}`;

  if (hasRandomPart()) {
    const postPrincipal: Post = getRandom(data.posts);
    main += ` ${postPrincipal.nom}`;
  }
  return capitalize(main);
};

const getIngredient = (
  ingredients: Ingredient[],
  typeFilter?: TypeAliment,
  excludeAlreadyUsed: boolean = true,
): Ingredient | null => {
  const filteredIngredients: Ingredient[] = ingredients.filter((item: Ingredient) => {
    return !(excludeAlreadyUsed && alreadyUsed.ingredients.includes(item.id))
      && (!typeFilter || item.types.includes(typeFilter));
  });
  if (filteredIngredients.length > 0) {
    const selected = getRandom(filteredIngredients);
    alreadyUsed.ingredients.push(selected.id);
    return selected;
  }
  return null;
};

const getPlatByType = (plats: Plat[], mainType: TypePlat): Plat => {
  const filterredPlats: Plat[] = plats.filter((item: Plat) =>
    item.types?.includes(mainType),
  );
  return getRandom(filterredPlats);
};


const getAdjectifBasedOnIngredient = (
  adjectifs: Adjectif[],
  ingredient: Ingredient,
  inconsistentLevel: number,
): Adjectif => {
  const filteredAdjectifs = isInconsistent(inconsistentLevel)
    ? adjectifs.filter((item: Adjectif) =>
      intersection(
        [...item.types],
        [...ingredient.types],
      ).length > 0
      && !alreadyUsed.adjectifs.includes(item.id),
    )
    : adjectifs;
  const selected = getRandom(filteredAdjectifs);
  alreadyUsed.adjectifs.push(selected.id);
  return selected;
};

const generateSecond = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
  inconsistentLevel: number,
): string => {
  let second: string = '';
  const lienSecondaire: Lien = getRandom(data.liens);
  const ingredientSecondaire: Ingredient | null = getIngredient(ingredients);
  if (!ingredientSecondaire) {
    return '';
  }
  const preIngredient: string = ingredientSecondaire.determinants[lienSecondaire.suite];
  const adjectifSecondaire: Adjectif = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientSecondaire,
    inconsistentLevel,
  );
  second += `${lienSecondaire.noms[platPrincipal.genre][platPrincipal.nombre]} ${preIngredient}`;
  if (!preIngredient.endsWith('\'')) {
    second += ' ';
  }
  second += `${ingredientSecondaire.nom} ${adjectifSecondaire.noms[ingredientSecondaire.genre][ingredientSecondaire.nombre]}`;

  if (hasRandomPart()) {
    const postSecondaire: Post = getRandom(data.posts);
    second += ` ${postSecondaire.nom}`;
  }
  return second;
};

function generateSauce(
  data: Menu,
  platPrincipal: Plat,
  typePlat: TypePlat,
  inconsistentLevel: number,
): string {
  const preSauce = getPreSauce(data);
  const typeSauce = getSauceType(data, typePlat);


  let preSuite: string = typeSauce.determinants[preSauce.suite];
  if (preSuite !== '' && !preSuite.endsWith('\'')) {
    preSuite = preSuite + ' ';
  }
  const ingredientSauce: Ingredient | null = getIngredient(ingredients, TypeAliment.SAUCE, false);
  if (!ingredientSauce) {
    return '';
  }
  let typeSuite: string = ingredientSauce.determinants[typeSauce.suite];
  if (typeSuite !== '' && !typeSuite.endsWith('\'')) {
    typeSuite = typeSuite + ' ';
  }
  const adjectifSauce: Adjectif = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientSauce,
    inconsistentLevel,
  );


  return preSauce.noms[platPrincipal.genre][platPrincipal.nombre] + ' ' + preSuite + typeSauce.nom + ' ' + typeSuite + ingredientSauce.nom + ' ' + adjectifSauce.noms[ingredientSauce.genre][ingredientSauce.nombre];
}

function getPreSauce(data: Menu): PreSauce {
  const availablePreSauces = [...data.preSauces];
  return getRandom(availablePreSauces);
}

function getSauceType(data: Menu, typePlat: TypePlat): SauceType {
  const availableSauceTypes = [...data.sauceTypes].filter((item: SauceType) =>
    item.types.includes(typePlat),
  );
  return getRandom(availableSauceTypes);
}
