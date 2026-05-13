export type AlreadyUsed = { ingredients: string[]; adjectifs: string[]; sauceTypes: string[] };

export const alreadyUsed: AlreadyUsed = {
  ingredients: [],
  adjectifs: [],
  sauceTypes: [],
};

export function getIngredientsAlreadyUsed(): string[] {
  return alreadyUsed.ingredients;
}

export function getAdjectifsAlreadyUsed(): string[] {
  return alreadyUsed.adjectifs;
}

export function getSauceTypesAlreadyUsed(): string[] {
  return alreadyUsed.sauceTypes;
}

export function addIngredientsAlreadyUsed(ing: string): string[] {
  alreadyUsed.ingredients.push(ing);
  return alreadyUsed.ingredients;
}

export function addAdjectifsAlreadyUsed(adj: string): string[] {
  alreadyUsed.adjectifs.push(adj);
  return alreadyUsed.adjectifs;
}

export function addSauceTypesAlreadyUsed(sauceType: string): string[] {
  alreadyUsed.sauceTypes.push(sauceType);
  return alreadyUsed.sauceTypes;
}

export function resetAlreadyUsed(): void {
  alreadyUsed.ingredients.length = 0;
  alreadyUsed.adjectifs.length = 0;
  alreadyUsed.sauceTypes.length = 0;
}
