import {
  Menu,



} from '@/types/menu';
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
import complements from '@/data/menu-complement';
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
  };
}

const getRandom = <T>(arr: T[]): T => arr[random(0, arr.length - 1)];

export function generateDisplayMenu(data: Menu, count: number = 1): DisplayMenu {
  alreadyUsed.ingredients = [];
  alreadyUsed.adjectifs = [];
  return {
    price: round(random(30.0, 250.0, true), 2),
    title: getRandom(data.titles).nom,
    complement: getRandom(data.complements).nom,
    entree: Array.from({ length: count }, () => generate(data, TypePlat.ENTREE)),
    plat: Array.from({ length: count }, () => generate(data, TypePlat.PLAT)),
    dessert: Array.from({ length: count }, () => generate(data, TypePlat.DESSERT)),
  };
}

export const generate = (data: Menu, mainType: TypePlat): Dish => {
  const platPrincipal: Plat = getPlatByType(data.plats, mainType);
  const typeAliments: TypeAliment[] = [...platPrincipal.typeAliments[mainType]];
  const ingredients: Ingredient[] = typeAliments && Array.isArray(typeAliments)
    ? [...data.ingredients].filter((item: Ingredient) =>
      intersection(
        [...item.types],
        typeAliments,
      ).length > 0,
    ) : [];
  return {
    main: generateMain(data, platPrincipal, ingredients),
    second: generateSecond(data, platPrincipal, ingredients),
    sauce: generateSauce(data),
  };
};

const generateMain = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
): string => {
  let main: string = '';
  const ingredientPrincipal: Ingredient | null = getIngredient(ingredients);
  if (!ingredientPrincipal) {
    return '';
  }
  const adjectifPrincipal: Adjectif = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientPrincipal,
  );
  if (random(1, 3) === 3) {
    const prePrincipal: Pre = getRandom(data.pres);
    main += `${prePrincipal.noms[platPrincipal.genre][platPrincipal.nombre]} `;
  }
  main += `${platPrincipal.nom} ${ingredientPrincipal.determinants[TypeDeterminant.PRINCIPAL]}`;
  if (!ingredientPrincipal.determinants[TypeDeterminant.PRINCIPAL].endsWith('\'')) {
    main += ' ';
  }
  main += `${ingredientPrincipal.nom} ${adjectifPrincipal.noms[ingredientPrincipal.genre][ingredientPrincipal.nombre]}`;

  if (random(1, 3) === 3) {
    const postPrincipal: Post = getRandom(data.posts);
    main += ` ${postPrincipal.nom}`;
  }
  return capitalize(main);
};

const getIngredient = (ingredients: Ingredient[], typeFilter?: TypeAliment): Ingredient | null => {
  console.log('alreadyUsed before', alreadyUsed);
  const filteredIngredients: Ingredient[] = ingredients.filter((item: Ingredient) => {
    return !alreadyUsed.ingredients.includes(item.id) && (!typeFilter || item.types.includes(
      typeFilter));
  });
  console.log('filteredIngredients', filteredIngredients);
  if (filteredIngredients.length > 0 ) {
    const selected = getRandom(filteredIngredients);
    console.log('selected', selected);
    alreadyUsed.ingredients.push(selected.id);
    console.log('alreadyUsed after', alreadyUsed);
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
): Adjectif => {
  const filteredAdjectifs = adjectifs.filter((item: Adjectif) =>
    intersection(
      [...item.types],
      [...ingredient.types],
    ).length > 0
    && !alreadyUsed.adjectifs.includes(item.id),
  );
  const selected = getRandom(filteredAdjectifs);
  alreadyUsed.adjectifs.push(selected.id);
  return selected;
};

const generateSecond = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
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
  );
  second += `${lienSecondaire.noms[platPrincipal.genre][platPrincipal.nombre]} ${preIngredient}`;
  if (!preIngredient.endsWith('\'')) {
    second += ' ';
  }
  second += `${ingredientSecondaire.nom} ${adjectifSecondaire.noms[ingredientSecondaire.genre][ingredientSecondaire.nombre]}`;

  if (random(1, 3) === 3) {
    const postSecondaire: Post = getRandom(data.posts);
    second += ` ${postSecondaire.nom}`;
  }
  return second;
};

function generateSauce(data: Menu): string {
  const ingredientSauce: Ingredient | null = getIngredient(ingredients, TypeAliment.SAUCE);
  if (!ingredientSauce) {
    return '';
  }
  const adjectifSauce: Adjectif = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientSauce,
  );
  return 'avec ça sauce de ' + ' ' + ingredientSauce.nom + ' ' + adjectifSauce.noms[ingredientSauce.genre][ingredientSauce.nombre];
}

