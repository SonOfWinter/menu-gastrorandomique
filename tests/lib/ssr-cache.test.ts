import { beforeEach, describe, expect, it } from 'vitest';
import {
  addAdjectifsAlreadyUsed,
  addIngredientsAlreadyUsed,
  addLiensAlreadyUsed,
  addPlatsAlreadyUsed,
  addPresAlreadyUsed,
  addPostsAlreadyUsed,
  addSauceTypesAlreadyUsed,
  alreadyUsed,
  getAdjectifsAlreadyUsed,
  getIngredientsAlreadyUsed,
  getLiensAlreadyUsed,
  getPlatsAlreadyUsed,
  getPresAlreadyUsed,
  getPostsAlreadyUsed,
  getSauceTypesAlreadyUsed,
  resetAlreadyUsed,
} from '@/lib/ssr-cache';

describe('lib/ssr-cache.ts', () => {
  beforeEach(() => {
    alreadyUsed.plats.length = 0;
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.liens.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('tracks plats, ingredients, adjectifs, liens, and sauce types', () => {
    addPlatsAlreadyUsed(1);
    addIngredientsAlreadyUsed(2);
    addAdjectifsAlreadyUsed(3);
    addLiensAlreadyUsed(4);
    addPresAlreadyUsed(5);
    addPostsAlreadyUsed(6);
    addSauceTypesAlreadyUsed(7);

    expect(getPlatsAlreadyUsed()).toEqual([1]);
    expect(getIngredientsAlreadyUsed()).toEqual([2]);
    expect(getAdjectifsAlreadyUsed()).toEqual([3]);
    expect(getLiensAlreadyUsed()).toEqual([4]);
    expect(getPresAlreadyUsed()).toEqual([5]);
    expect(getPostsAlreadyUsed()).toEqual([6]);
    expect(getSauceTypesAlreadyUsed()).toEqual([7]);
  });

  it('resets the cache', () => {
    addPlatsAlreadyUsed(1);
    addIngredientsAlreadyUsed(2);
    addAdjectifsAlreadyUsed(3);
    addLiensAlreadyUsed(4);
    addPresAlreadyUsed(5);
    addPostsAlreadyUsed(6);
    addSauceTypesAlreadyUsed(7);

    resetAlreadyUsed();

    expect(getPlatsAlreadyUsed()).toEqual([]);
    expect(getIngredientsAlreadyUsed()).toEqual([]);
    expect(getAdjectifsAlreadyUsed()).toEqual([]);
    expect(getLiensAlreadyUsed()).toEqual([]);
    expect(getPresAlreadyUsed()).toEqual([]);
    expect(getPostsAlreadyUsed()).toEqual([]);
    expect(getSauceTypesAlreadyUsed()).toEqual([]);
  });
});
