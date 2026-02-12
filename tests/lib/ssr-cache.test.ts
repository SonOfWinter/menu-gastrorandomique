import { beforeEach, describe, expect, it } from 'vitest';
import {
  addAdjectifsAlreadyUsed,
  addIngredientsAlreadyUsed,
  alreadyUsed,
  getAdjectifsAlreadyUsed,
  getIngredientsAlreadyUsed,
} from '@/lib/ssr-cache';

describe('lib/ssr-cache.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
  });

  it('tracks ingredients and adjectifs', () => {
    addIngredientsAlreadyUsed('ing-1');
    addAdjectifsAlreadyUsed('adj-1');

    expect(getIngredientsAlreadyUsed()).toEqual(['ing-1']);
    expect(getAdjectifsAlreadyUsed()).toEqual(['adj-1']);
  });
});
