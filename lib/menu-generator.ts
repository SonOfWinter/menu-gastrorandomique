import {
  TypePlat,
  Menu,
  Plat,
  Ingredient,
  TypeAliment,
  Adjectif,
  Pre,
  Post,
  Lien,
  Dish,
  DisplayMenu,
  TypeDeterminant,
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

const alreadyUsed: { ingredients: string[], adjectifs: string[] } = {
  ingredients: [],
  adjectifs: [],
};

// Fonction générique pour accéder à une propriété de manière sécurisée
function getField<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

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

export function generateDisplayMenu(data: Menu): DisplayMenu {
  alreadyUsed.ingredients = [];
  alreadyUsed.adjectifs = [];
  return {
    price: round(random(30.0, 250.0, true), 2),
    title: data.titles[random(0, data.titles.length - 1)].nom,
    complement: data.complements[random(0, data.complements.length - 1)].nom,
    entree: generate(data, TypePlat.ENTREE),
    plat: generate(data, TypePlat.PLAT),
    dessert: generate(data, TypePlat.DESSERT),
  };
}

export const generate = (data: Menu, mainType: TypePlat): Dish => {
  const platPrincipal: Plat = getPlatByType(data.plats, mainType);

  const typeAliments: string | TypePlat[] | TypeAliment[] = getField(
    platPrincipal,
    mainType,
  );

  const ingredients: Ingredient[] = typeAliments && Array.isArray(typeAliments)
    ? data.ingredients.filter((item: Ingredient) =>
      intersection(
        item.types,
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
  const ingredientPrincipal: Ingredient = getIngredient(ingredients);
  const adjectifPrincipal: Adjectif = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientPrincipal,
  );
  if (random(1, 3) === 3) {
    const prePrincipal: Pre = data.pres[random(0, data.pres.length - 1)];
    main += `${prePrincipal.noms[platPrincipal.genre][platPrincipal.nombre]} `;
  }
  main += `${platPrincipal.nom} ${ingredientPrincipal.determinants[TypeDeterminant.PRINCIPAL]}`;
  if (!ingredientPrincipal.determinants[TypeDeterminant.PRINCIPAL].endsWith('\'')) {
    main += ' ';
  }
  main += `${ingredientPrincipal.nom} ${adjectifPrincipal.noms[ingredientPrincipal.genre][ingredientPrincipal.nombre]}`;

  if (random(1, 3) === 3) {
    const postPrincipal: Post = data.posts[random(0, data.posts.length - 1)];
    main += ` ${postPrincipal.nom}`;
  }
  return capitalize(main);
};

const getIngredient = (ingredients: Ingredient[], typeFilter?: TypeAliment): Ingredient => {
  const filteredIngredients: Ingredient[] = ingredients.filter((item: Ingredient) => {
    return !alreadyUsed.ingredients.includes(item.id) && (!typeFilter || item.types.includes(
      typeFilter));
  });
  const selected = filteredIngredients[random(0, filteredIngredients.length - 1)];
  alreadyUsed.ingredients.push(selected.id);
  return selected;
};

const getPlatByType = (plats: Plat[], mainType: TypePlat): Plat => {
  const filterredPlats: Plat[] = plats.filter((item: Plat) =>
    item.types?.includes(mainType),
  );
  return filterredPlats[random(0, filterredPlats.length - 1)];
};


const getAdjectifBasedOnIngredient = (
  adjectifs: Adjectif[],
  ingredient: Ingredient,
): Adjectif => {
  const filteredAdjectifs = adjectifs.filter((item: Adjectif) =>
    intersection(
      item.types,
      ingredient.types,
    ).length > 0
    && !alreadyUsed.adjectifs.includes(item.id),
  );
  const selected = filteredAdjectifs[random(0, filteredAdjectifs.length - 1)];
  alreadyUsed.adjectifs.push(selected.id);
  return selected;
};

const generateSecond = (
  data: Menu,
  platPrincipal: Plat,
  ingredients: Ingredient[],
): string => {
  let second: string = '';
  const lienSecondaire: Lien = data.liens[random(0, data.liens.length - 1)];
  const ingredientSecondaire: Ingredient = getIngredient(ingredients);

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
    const postSecondaire: Post = data.posts[random(0, data.posts.length - 1)];
    second += ` ${postSecondaire.nom}`;
  }
  return second;
};

function generateSauce(data: Menu) {
  const ingredientSauce: Ingredient = getIngredient(ingredients, TypeAliment.SAUCE);
  const adjectifSauce: Adjectif = getAdjectifBasedOnIngredient(
    data.adjectifs,
    ingredientSauce,
  );
  return 'avec ça sauce de ' + ' ' + ingredientSauce.nom + ' ' + adjectifSauce.noms[ingredientSauce.genre][ingredientSauce.nombre];
}

