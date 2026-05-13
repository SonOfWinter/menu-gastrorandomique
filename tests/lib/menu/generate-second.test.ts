import { beforeEach, describe, expect, it } from 'vitest';
import generateSecond from '@/lib/menu/generate-second';
import { alreadyUsed } from '@/lib/ssr-cache';
import { menuData, plat, ingredientOne } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';

const ingredients = [ingredientOne];

describe('lib/menu/generate-second.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
  });

  it('generates a secondary dish label', () => {
    const second = generateSecond(menuData, plat, ingredients, TypePlat.DESSERT, 0, () => 0);
    expect(second).toBe('au de la pomme sucree');
  });

  it('filters optional suffixes by dish type', () => {
    const second = generateSecond(
      {
        ...menuData,
        posts: [
          {
            ...menuData.posts[0],
            id: 'post-entree',
            nom: 'hors-sujet',
            types: [TypePlat.ENTREE],
          },
          menuData.posts[0],
        ],
      },
      plat,
      ingredients,
      TypePlat.DESSERT,
      0,
      createSequenceRng([0, 0, 0, 0.999, 0]),
    );

    expect(second).toBe('au de la pomme sucree maison');
  });
});

function createSequenceRng(values: number[]): () => number {
  let index = 0;
  return () => values[index++] ?? 0;
}
