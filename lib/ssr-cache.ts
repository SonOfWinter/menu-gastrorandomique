export type AlreadyUsed = {
  plats: number[];
  ingredients: number[];
  adjectifs: number[];
  liens: number[];
  pres: number[];
  posts: number[];
  sauceTypes: number[];
};

export const alreadyUsed: AlreadyUsed = {
  plats: [],
  ingredients: [],
  adjectifs: [],
  liens: [],
  pres: [],
  posts: [],
  sauceTypes: [],
};

export function getPlatsAlreadyUsed(): number[] {
  return alreadyUsed.plats;
}

export function getIngredientsAlreadyUsed(): number[] {
  return alreadyUsed.ingredients;
}

export function getAdjectifsAlreadyUsed(): number[] {
  return alreadyUsed.adjectifs;
}

export function getLiensAlreadyUsed(): number[] {
  return alreadyUsed.liens;
}

export function getPresAlreadyUsed(): number[] {
  return alreadyUsed.pres;
}

export function getPostsAlreadyUsed(): number[] {
  return alreadyUsed.posts;
}

export function getSauceTypesAlreadyUsed(): number[] {
  return alreadyUsed.sauceTypes;
}

export function addPlatsAlreadyUsed(plat: number): number[] {
  alreadyUsed.plats.push(plat);
  return alreadyUsed.plats;
}

export function addIngredientsAlreadyUsed(ing: number): number[] {
  alreadyUsed.ingredients.push(ing);
  return alreadyUsed.ingredients;
}

export function addAdjectifsAlreadyUsed(adj: number): number[] {
  alreadyUsed.adjectifs.push(adj);
  return alreadyUsed.adjectifs;
}

export function addLiensAlreadyUsed(lien: number): number[] {
  alreadyUsed.liens.push(lien);
  return alreadyUsed.liens;
}

export function addPresAlreadyUsed(pre: number): number[] {
  alreadyUsed.pres.push(pre);
  return alreadyUsed.pres;
}

export function addPostsAlreadyUsed(post: number): number[] {
  alreadyUsed.posts.push(post);
  return alreadyUsed.posts;
}

export function addSauceTypesAlreadyUsed(sauceType: number): number[] {
  alreadyUsed.sauceTypes.push(sauceType);
  return alreadyUsed.sauceTypes;
}

export function resetAlreadyUsed(): void {
  alreadyUsed.plats.length = 0;
  alreadyUsed.ingredients.length = 0;
  alreadyUsed.adjectifs.length = 0;
  alreadyUsed.liens.length = 0;
  alreadyUsed.pres.length = 0;
  alreadyUsed.posts.length = 0;
  alreadyUsed.sauceTypes.length = 0;
}
