import { beforeEach, describe, expect, it } from 'vitest';
import generateSecond from '@/lib/menu/generate-second';
import { alreadyUsed } from '@/lib/ssr-cache';
import { ingredientOne, menuData, plat } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';
import { TypeAliment } from '@/types/enums/type-aliment';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeDeterminant } from '@/types/enums/type-determinant';

const ingredients = [ingredientOne];

describe('lib/menu/generate-second.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
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

  it('filters secondary links by ingredient types', () => {
    const vegetable = {
      id: 'ing-vegetable',
      nom: 'navet',
      genre: Genre.MASCULIN,
      nombre: Nombre.SINGULIER,
      types: [TypeAliment.LEGUME],
      determinants: {
        [TypeDeterminant.PRINCIPAL]: 'de',
        [TypeDeterminant.SECONDAIRE]: 'du',
        [TypeDeterminant.POSSESSIF]: 'son',
        [TypeDeterminant.INDEFINI]: 'd\'un',
        [TypeDeterminant.ARTICLE_INDEFINI]: 'un',
      },
    };

    const second = generateSecond(
      {
        ...menuData,
        liens: [
          {
            ...menuData.liens[0],
            id: 'lien-fruit',
            compatibleIngredientTypes: [TypeAliment.FRUIT],
          },
          {
            ...menuData.liens[0],
            id: 'lien-legume',
            noms: {
              [Genre.FEMININ]: { [Nombre.SINGULIER]: 'avec', [Nombre.PLURIEL]: 'avec' },
              [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'avec', [Nombre.PLURIEL]: 'avec' },
            },
            suite: TypeDeterminant.ARTICLE_INDEFINI,
            compatibleIngredientTypes: [TypeAliment.LEGUME],
          },
        ],
      },
      plat,
      [vegetable, ingredientOne],
      TypePlat.DESSERT,
      0,
      () => 0,
    );

    expect(second).toBe('avec un navet');
  });
});

function createSequenceRng(values: number[]): () => number {
  let index = 0;
  return () => values[index++] ?? 0;
}
