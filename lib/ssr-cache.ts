export type AlreadyUsed = {
  plats: string[];
  ingredients: string[];
  adjectifs: string[];
  pres: string[];
  posts: string[];
  sauceTypes: string[];
};

export const alreadyUsed: AlreadyUsed = {
  plats: [],
  ingredients: [],
  adjectifs: [],
  pres: [],
  posts: [],
  sauceTypes: [],
};

export function getPlatsAlreadyUsed(): string[] {
  return alreadyUsed.plats;
}

export function getIngredientsAlreadyUsed(): string[] {
  return alreadyUsed.ingredients;
}

export function getAdjectifsAlreadyUsed(): string[] {
  return alreadyUsed.adjectifs;
}

export function getPresAlreadyUsed(): string[] {
  return alreadyUsed.pres;
}

export function getPostsAlreadyUsed(): string[] {
  return alreadyUsed.posts;
}

export function getSauceTypesAlreadyUsed(): string[] {
  return alreadyUsed.sauceTypes;
}

export function addPlatsAlreadyUsed(plat: string): string[] {
  alreadyUsed.plats.push(plat);
  return alreadyUsed.plats;
}

export function addIngredientsAlreadyUsed(ing: string): string[] {
  alreadyUsed.ingredients.push(ing);
  return alreadyUsed.ingredients;
}

export function addAdjectifsAlreadyUsed(adj: string): string[] {
  alreadyUsed.adjectifs.push(adj);
  return alreadyUsed.adjectifs;
}

export function addPresAlreadyUsed(pre: string): string[] {
  alreadyUsed.pres.push(pre);
  return alreadyUsed.pres;
}

export function addPostsAlreadyUsed(post: string): string[] {
  alreadyUsed.posts.push(post);
  return alreadyUsed.posts;
}

export function addSauceTypesAlreadyUsed(sauceType: string): string[] {
  alreadyUsed.sauceTypes.push(sauceType);
  return alreadyUsed.sauceTypes;
}

export function resetAlreadyUsed(): void {
  alreadyUsed.plats.length = 0;
  alreadyUsed.ingredients.length = 0;
  alreadyUsed.adjectifs.length = 0;
  alreadyUsed.pres.length = 0;
  alreadyUsed.posts.length = 0;
  alreadyUsed.sauceTypes.length = 0;
}
