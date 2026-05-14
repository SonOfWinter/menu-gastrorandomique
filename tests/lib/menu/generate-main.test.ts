import { beforeEach, describe, expect, it } from 'vitest';
import generateMain from '@/lib/menu/generate-main';
import { alreadyUsed } from '@/lib/ssr-cache';
import { menuData, plat, ingredientOne } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';

const ingredients = [ingredientOne];

describe('lib/menu/generate-main.ts', () => {
  beforeEach(() => {
    alreadyUsed.plats.length = 0;
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.liens.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('generates a main dish label', () => {
    const main = generateMain(menuData, plat, ingredients, TypePlat.DESSERT, 0, () => 0);
    expect(main).toBe('Tarte de pomme sucree');
  });

  it('filters optional prefixes and suffixes by dish type', () => {
    const main = generateMain(
      {
        ...menuData,
        pres: [
          {
            ...menuData.pres[0],
            id: 'pre-entree',
            noms: {
              ...menuData.pres[0].noms,
              [plat.genre]: {
                ...menuData.pres[0].noms[plat.genre],
                [plat.nombre]: 'hors-sujet',
              },
            },
            types: [TypePlat.ENTREE],
          },
          menuData.pres[0],
        ],
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
      createSequenceRng([0, 0, 0.999, 0, 0.999, 0]),
    );

    expect(main).toBe('A la tarte de pomme sucree maison');
  });
});

function createSequenceRng(values: number[]): () => number {
  let index = 0;
  return () => values[index++] ?? 0;
}
