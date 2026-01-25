export type AlreadyUsed = { ingredients: string[]; adjectifs: string[] };

export const alreadyUsed: AlreadyUsed = {
  ingredients: [],
  adjectifs: [],
};

export function getIngredientsAlreadyUsed(): string[] {
  return alreadyUsed.ingredients;
}

export function getAdjectifsAlreadyUsed(): string[] {
  return alreadyUsed.adjectifs;
}

export function addIngredientsAlreadyUsed(ing: string): string[] {
  alreadyUsed.ingredients.push(ing);
  return alreadyUsed.ingredients;
}

export function addAdjectifsAlreadyUsed(adj: string): string[] {
  alreadyUsed.adjectifs.push(adj);
  return alreadyUsed.adjectifs;
}
