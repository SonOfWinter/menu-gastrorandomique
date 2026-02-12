import { beforeEach, describe, expect, it } from 'vitest';
import getIngredient from '@/lib/menu/get-ingredient';
import { alreadyUsed } from '@/lib/ssr-cache';
import { ingredientOne, ingredientTwo } from './fixtures';

const ingredients = [ingredientOne, ingredientTwo];

describe('lib/menu/get-ingredient.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
  });

  it('filters ingredients and respects already used flags', () => {
    const selected = getIngredient(ingredients, undefined, true, null, () => 0);
    expect(selected?.id).toBe('ing-1');

    const second = getIngredient(ingredients, undefined, true, null, () => 0);
    expect(second?.id).toBe('ing-2');

    const allowed = getIngredient(ingredients, undefined, false, null, () => 0);
    expect(allowed?.id).toBe('ing-1');
  });
});
