import { beforeEach, describe, expect, it } from 'vitest';
import getAdjectifBasedOnIngredient from '@/lib/menu/get-adjectif-based-on-ingredient';
import { alreadyUsed } from '@/lib/ssr-cache';
import { adjectifOne, adjectifTwo, ingredientOne } from './fixtures';

describe('lib/menu/get-adjectif-based-on-ingredient.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
  });

  it('selects and caches adjectifs by ingredient', () => {
    const selected = getAdjectifBasedOnIngredient(
      [adjectifOne, adjectifTwo],
      ingredientOne,
      0,
      () => 0,
    );
    expect(selected?.id).toBe('adj-1');

    const second = getAdjectifBasedOnIngredient(
      [adjectifOne, adjectifTwo],
      ingredientOne,
      0,
      () => 0,
    );
    expect(second?.id).toBe('adj-2');
  });
});
