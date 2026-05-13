import { beforeEach, describe, expect, it } from 'vitest';
import {
  addAdjectifsAlreadyUsed,
  addIngredientsAlreadyUsed,
  addSauceTypesAlreadyUsed,
  alreadyUsed,
  getAdjectifsAlreadyUsed,
  getIngredientsAlreadyUsed,
  getSauceTypesAlreadyUsed,
  resetAlreadyUsed,
} from '@/lib/ssr-cache';

describe('lib/ssr-cache.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('tracks ingredients, adjectifs, and sauce types', () => {
    addIngredientsAlreadyUsed('ing-1');
    addAdjectifsAlreadyUsed('adj-1');
    addSauceTypesAlreadyUsed('sauce-type-1');

    expect(getIngredientsAlreadyUsed()).toEqual(['ing-1']);
    expect(getAdjectifsAlreadyUsed()).toEqual(['adj-1']);
    expect(getSauceTypesAlreadyUsed()).toEqual(['sauce-type-1']);
  });

  it('resets the cache', () => {
    addIngredientsAlreadyUsed('ing-1');
    addAdjectifsAlreadyUsed('adj-1');
    addSauceTypesAlreadyUsed('sauce-type-1');

    resetAlreadyUsed();

    expect(getIngredientsAlreadyUsed()).toEqual([]);
    expect(getAdjectifsAlreadyUsed()).toEqual([]);
    expect(getSauceTypesAlreadyUsed()).toEqual([]);
  });
});
