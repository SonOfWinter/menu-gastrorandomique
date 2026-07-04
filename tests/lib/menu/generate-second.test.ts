import { beforeEach, describe, expect, it } from 'vitest';
import generateSecond from '@/lib/menu/generate-second';
import { alreadyUsed } from '@/lib/ssr-cache';
import { createMenuData, ingredientOne, menuData, plat } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';
import { TYPE_ALIMENT_BITS, TypeAliment } from '@/types/enums/type-aliment';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { THEME_BITS, THEME_PALETTES, Theme } from '@/types/enums/theme';
import { getCompatibilityMask } from '@/lib/menu/compatibility-mask';

const ingredients = [ingredientOne];

describe('lib/menu/generate-second.ts', () => {
  beforeEach(() => {
    alreadyUsed.plats.length = 0;
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.liens.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('generates a secondary dish label', () => {
    const second = generateSecond(menuData, plat, ingredients, TypePlat.DESSERT, 0, () => 0);
    expect(second).toBe('au de la pomme sucree');
  });

  it('does not add a space after a typographic apostrophe determinant', () => {
    const second = generateSecond(
      menuData,
      plat,
      [
        {
          ...ingredientOne,
          nom: 'orange',
          determinants: {
            ...ingredientOne.determinants,
            [TypeDeterminant.SECONDAIRE]: 'de l’',
          },
        },
      ],
      TypePlat.DESSERT,
      0,
      () => 0,
    );

    expect(second).toBe('au de l’orange sucree');
  });

  it('filters optional suffixes by dish type', () => {
    const second = generateSecond(
      createMenuData({
        posts: [
          {
            ...menuData.posts[menuData.indexes.postIdsByType[TypePlat.DESSERT][0]],
            id: 'post-entree',
            nom: 'hors-sujet',
            types: [TypePlat.ENTREE],
          },
          menuData.posts[menuData.indexes.postIdsByType[TypePlat.DESSERT][0]],
        ],
      }),
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
        [TypeDeterminant.INDEFINI]: 'd’un',
        [TypeDeterminant.ARTICLE_INDEFINI]: 'un',
      },
    };

    const second = generateSecond(
      createMenuData({
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
      }),
      plat,
      [vegetable, ingredientOne],
      TypePlat.DESSERT,
      0,
      () => 0,
    );

    expect(second).toBe('avec un navet');
  });

  it('avoids selecting an already used secondary link when another one is available', () => {
    const data = createMenuData({
      liens: [
        {
          ...menuData.liens[0],
          id: 'lien-au',
        },
        {
          ...menuData.liens[0],
          id: 'lien-avec',
          noms: {
            [Genre.FEMININ]: { [Nombre.SINGULIER]: 'avec', [Nombre.PLURIEL]: 'avec' },
            [Genre.MASCULIN]: { [Nombre.SINGULIER]: 'avec', [Nombre.PLURIEL]: 'avec' },
          },
          suite: TypeDeterminant.ARTICLE_INDEFINI,
        },
      ],
    });

    const fruitIngredients = menuData.indexes.ingredientIdsByType[TypeAliment.FRUIT].map((id) => menuData.ingredients[id]);
    const first = generateSecond(data, plat, fruitIngredients, TypePlat.DESSERT, 0, () => 0);
    const second = generateSecond(data, plat, fruitIngredients, TypePlat.DESSERT, 0, () => 0);

    expect(first).toBe('au de la pomme sucree');
    expect(second).toBe('avec une poire croquante');
  });

  it('applies the theme after manually filtering compatible links', () => {
    const data = withoutLienMaskIndex(createMenuData({
      liens: [
        createLien('lien-winter', 'hivernal', [TypeAliment.FRUIT], Theme.HIVER),
        createLien('lien-medieval', 'medieval', [TypeAliment.FRUIT], Theme.MEDIEVAL),
      ],
    }), ingredientOne);

    const second = generateSecond(
      data,
      plat,
      ingredients,
      TypePlat.DESSERT,
      0,
      () => 0,
      undefined,
      medievalThemeContext,
    );

    expect(second).toBe('medieval de la pomme sucree');
  });

  it('keeps type compatibility before relaxing the theme', () => {
    const data = withoutLienMaskIndex(createMenuData({
      liens: [
        createLien('lien-compatible', 'compatible', [TypeAliment.FRUIT], Theme.HIVER),
        createLien('lien-themed', 'thematique', [TypeAliment.LEGUME], Theme.MEDIEVAL),
      ],
    }), ingredientOne);

    const second = generateSecond(
      data,
      plat,
      ingredients,
      TypePlat.DESSERT,
      0,
      () => 0,
      undefined,
      medievalThemeContext,
    );

    expect(second).toBe('compatible de la pomme sucree');
  });

  it('falls back to a themed link when no link is type-compatible', () => {
    const data = withoutLienMaskIndex(createMenuData({
      liens: [
        createLien('lien-winter', 'hivernal', [TypeAliment.LEGUME], Theme.HIVER),
        createLien('lien-medieval', 'medieval', [TypeAliment.LEGUME], Theme.MEDIEVAL),
      ],
    }), ingredientOne);

    const second = generateSecond(
      data,
      plat,
      ingredients,
      TypePlat.DESSERT,
      0,
      () => 0,
      undefined,
      medievalThemeContext,
    );

    expect(second).toBe('medieval de la pomme sucree');
  });

  it('falls back to all links when neither compatibility nor theme matches', () => {
    const data = withoutLienMaskIndex(createMenuData({
      liens: [
        createLien('lien-winter', 'hivernal', [TypeAliment.LEGUME], Theme.HIVER),
      ],
    }), ingredientOne);

    const second = generateSecond(
      data,
      plat,
      ingredients,
      TypePlat.DESSERT,
      0,
      () => 0,
      undefined,
      medievalThemeContext,
    );

    expect(second).toBe('hivernal de la pomme sucree');
  });
});

function createSequenceRng(values: number[]): () => number {
  let index = 0;
  return () => values[index++] ?? 0;
}

const medievalThemeContext = {
  theme: {
    id: Theme.MEDIEVAL,
    nom: 'Médiéval',
    compatibilityMask: THEME_BITS[Theme.MEDIEVAL],
    palette: THEME_PALETTES[Theme.MEDIEVAL],
  },
};

function createLien(
  id: string,
  nom: string,
  compatibleIngredientTypes: TypeAliment[],
  theme: Theme,
) {
  return {
    ...menuData.liens[0],
    id,
    noms: {
      [Genre.FEMININ]: { [Nombre.SINGULIER]: nom, [Nombre.PLURIEL]: nom },
      [Genre.MASCULIN]: { [Nombre.SINGULIER]: nom, [Nombre.PLURIEL]: nom },
    },
    compatibleIngredientTypes,
    themeCompatibilityMask: THEME_BITS[theme],
  };
}

function withoutLienMaskIndex(
  data: ReturnType<typeof createMenuData>,
  ingredient: typeof ingredientOne,
) {
  const mask = ingredient.compatibilityMask
    ?? getCompatibilityMask(ingredient.types, TYPE_ALIMENT_BITS);
  const { [mask]: omitted, ...lienIdsByAcceptedMask } =
    data.indexes.lienIdsByAcceptedMask;
  expect(omitted).toBeDefined();

  return {
    ...data,
    indexes: {
      ...data.indexes,
      lienIdsByAcceptedMask,
    },
  };
}
