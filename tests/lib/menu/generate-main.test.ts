import { beforeEach, describe, expect, it } from 'vitest';
import generateMain from '@/lib/menu/generate-main';
import { alreadyUsed } from '@/lib/ssr-cache';
import { createMenuData, menuData, plat, ingredientOne } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';
import { TypeDeterminant } from '@/types/enums/type-determinant';

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

  it('does not add a space after a typographic apostrophe determinant', () => {
    const main = generateMain(
      menuData,
      plat,
      [
        {
          ...ingredientOne,
          nom: 'orange',
          determinants: {
            ...ingredientOne.determinants,
            [TypeDeterminant.PRINCIPAL]: 'd’',
          },
        },
      ],
      TypePlat.DESSERT,
      0,
      () => 0,
    );

    expect(main).toBe('Tarte d’orange sucree');
  });

  it('adds a randomly selected ingredient post adjective', () => {
    const main = generateMain(
      menuData,
      plat,
      [
        {
          ...ingredientOne,
          postAdjectifs: ['', 'rouge'],
        },
      ],
      TypePlat.DESSERT,
      0,
      createSequenceRng([0, 0, 0, 0.99, 0]),
    );

    expect(main).toBe('Tarte de pomme rouge sucree');
  });

  it('filters optional prefixes and suffixes by dish type', () => {
    const main = generateMain(
      createMenuData({
        pres: [
          {
            ...menuData.indexes.presByType[TypePlat.DESSERT][0],
            id: 'pre-entree',
            noms: {
              ...menuData.indexes.presByType[TypePlat.DESSERT][0].noms,
              [plat.genre]: {
                ...menuData.indexes.presByType[TypePlat.DESSERT][0].noms[plat.genre],
                [plat.nombre]: 'hors-sujet',
              },
            },
            types: [TypePlat.ENTREE],
          },
          menuData.indexes.presByType[TypePlat.DESSERT][0],
        ],
        posts: [
          {
            ...menuData.indexes.postsByType[TypePlat.DESSERT][0],
            id: 'post-entree',
            nom: 'hors-sujet',
            types: [TypePlat.ENTREE],
          },
          menuData.indexes.postsByType[TypePlat.DESSERT][0],
        ],
      }),
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
