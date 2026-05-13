import { beforeEach, describe, expect, it } from 'vitest';
import {
  addAdjectifsAlreadyUsed,
  addIngredientsAlreadyUsed,
  addPresAlreadyUsed,
  addPostsAlreadyUsed,
  addSauceTypesAlreadyUsed,
  alreadyUsed,
  getAdjectifsAlreadyUsed,
  getIngredientsAlreadyUsed,
  getPresAlreadyUsed,
  getPostsAlreadyUsed,
  getSauceTypesAlreadyUsed,
  resetAlreadyUsed,
} from '@/lib/ssr-cache';

describe('lib/ssr-cache.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('tracks ingredients, adjectifs, and sauce types', () => {
    addIngredientsAlreadyUsed('ing-1');
    addAdjectifsAlreadyUsed('adj-1');
    addPresAlreadyUsed('pre-1');
    addPostsAlreadyUsed('post-1');
    addSauceTypesAlreadyUsed('sauce-type-1');

    expect(getIngredientsAlreadyUsed()).toEqual(['ing-1']);
    expect(getAdjectifsAlreadyUsed()).toEqual(['adj-1']);
    expect(getPresAlreadyUsed()).toEqual(['pre-1']);
    expect(getPostsAlreadyUsed()).toEqual(['post-1']);
    expect(getSauceTypesAlreadyUsed()).toEqual(['sauce-type-1']);
  });

  it('resets the cache', () => {
    addIngredientsAlreadyUsed('ing-1');
    addAdjectifsAlreadyUsed('adj-1');
    addPresAlreadyUsed('pre-1');
    addPostsAlreadyUsed('post-1');
    addSauceTypesAlreadyUsed('sauce-type-1');

    resetAlreadyUsed();

    expect(getIngredientsAlreadyUsed()).toEqual([]);
    expect(getAdjectifsAlreadyUsed()).toEqual([]);
    expect(getPresAlreadyUsed()).toEqual([]);
    expect(getPostsAlreadyUsed()).toEqual([]);
    expect(getSauceTypesAlreadyUsed()).toEqual([]);
  });
});
