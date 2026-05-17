import { EntityId } from '@/types/entity-id';

export type AlreadyUsed = {
  plats: string[];
  ingredients: EntityId[];
  adjectifs: EntityId[];
  liens: EntityId[];
  pres: EntityId[];
  posts: EntityId[];
  sauceTypes: EntityId[];
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

export function getPlatsAlreadyUsed(): string[] {
  return alreadyUsed.plats;
}

export function getIngredientsAlreadyUsed(): EntityId[] {
  return alreadyUsed.ingredients;
}

export function getAdjectifsAlreadyUsed(): EntityId[] {
  return alreadyUsed.adjectifs;
}

export function getLiensAlreadyUsed(): EntityId[] {
  return alreadyUsed.liens;
}

export function getPresAlreadyUsed(): EntityId[] {
  return alreadyUsed.pres;
}

export function getPostsAlreadyUsed(): EntityId[] {
  return alreadyUsed.posts;
}

export function getSauceTypesAlreadyUsed(): EntityId[] {
  return alreadyUsed.sauceTypes;
}

export function addPlatsAlreadyUsed(plat: string): string[] {
  alreadyUsed.plats.push(plat);
  return alreadyUsed.plats;
}

export function addIngredientsAlreadyUsed(ing: EntityId): EntityId[] {
  alreadyUsed.ingredients.push(ing);
  return alreadyUsed.ingredients;
}

export function addAdjectifsAlreadyUsed(adj: EntityId): EntityId[] {
  alreadyUsed.adjectifs.push(adj);
  return alreadyUsed.adjectifs;
}

export function addLiensAlreadyUsed(lien: EntityId): EntityId[] {
  alreadyUsed.liens.push(lien);
  return alreadyUsed.liens;
}

export function addPresAlreadyUsed(pre: EntityId): EntityId[] {
  alreadyUsed.pres.push(pre);
  return alreadyUsed.pres;
}

export function addPostsAlreadyUsed(post: EntityId): EntityId[] {
  alreadyUsed.posts.push(post);
  return alreadyUsed.posts;
}

export function addSauceTypesAlreadyUsed(sauceType: EntityId): EntityId[] {
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
