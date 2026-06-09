import { beforeEach, describe, expect, it } from 'vitest';
import { generateDish } from '@/lib/menu/generate-dish';
import { alreadyUsed } from '@/lib/ssr-cache';
import {
  adjectifOne,
  adjectifTwo,
  createMenuData,
  ingredientOne,
  ingredientTwo,
  lien,
  menuData,
  plat,
} from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';
import { THEME_BITS, Theme } from '@/types/enums/theme';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';

describe('lib/menu/generate-dish.ts', () => {
  beforeEach(() => {
    alreadyUsed.plats.length = 0;
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.liens.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('generates a composed dish', () => {
    const dish = generateDish(menuData, TypePlat.DESSERT, 0, () => 0);
    expect(dish.main).toBe('Tarte de pomme sucree');
    expect(dish.second).toBe('au de la poire croquante');
    expect(dish.sauce).toBeNull();
    expect(dish.icons).toEqual(['chefRecommendation']);
  });

  it('applies one theme across the composed dish selections', () => {
    const themedData = createMenuData({
      plats: [
        {
          ...plat,
          id: 'plat-winter',
          nom: 'glace',
          themeCompatibilityMask: THEME_BITS[Theme.HIVER],
        },
        {
          ...plat,
          id: 'plat-medieval',
          nom: 'tourte',
          themeCompatibilityMask: THEME_BITS[Theme.MEDIEVAL],
        },
      ],
      ingredients: [
        {
          ...ingredientOne,
          id: 'ingredient-winter-1',
          nom: 'glacon',
          themeCompatibilityMask: THEME_BITS[Theme.HIVER],
        },
        {
          ...ingredientTwo,
          id: 'ingredient-winter-2',
          nom: 'neige',
          themeCompatibilityMask: THEME_BITS[Theme.HIVER],
        },
        {
          ...ingredientOne,
          id: 'ingredient-medieval-1',
          nom: 'pomme',
          themeCompatibilityMask: THEME_BITS[Theme.MEDIEVAL],
        },
        {
          ...ingredientTwo,
          id: 'ingredient-medieval-2',
          nom: 'poire',
          themeCompatibilityMask: THEME_BITS[Theme.MEDIEVAL],
        },
      ],
      adjectifs: [
        {
          ...adjectifOne,
          id: 'adjectif-winter',
          themeCompatibilityMask: THEME_BITS[Theme.HIVER],
        },
        {
          ...adjectifOne,
          id: 'adjectif-medieval-1',
          themeCompatibilityMask: THEME_BITS[Theme.MEDIEVAL],
        },
        {
          ...adjectifTwo,
          id: 'adjectif-medieval-2',
          themeCompatibilityMask: THEME_BITS[Theme.MEDIEVAL],
        },
      ],
      liens: [
        {
          ...lien,
          id: 'lien-winter',
          themeCompatibilityMask: THEME_BITS[Theme.HIVER],
        },
        {
          ...lien,
          id: 'lien-medieval',
          noms: {
            [Genre.FEMININ]: {
              [Nombre.SINGULIER]: 'avec',
              [Nombre.PLURIEL]: 'avec',
            },
            [Genre.MASCULIN]: {
              [Nombre.SINGULIER]: 'avec',
              [Nombre.PLURIEL]: 'avec',
            },
          },
          themeCompatibilityMask: THEME_BITS[Theme.MEDIEVAL],
        },
      ],
    });

    const dish = generateDish(
      themedData,
      TypePlat.DESSERT,
      0,
      () => 0,
      {
        theme: {
          id: Theme.MEDIEVAL,
          nom: 'Médiéval',
          compatibilityMask: THEME_BITS[Theme.MEDIEVAL],
        },
      },
    );

    expect(dish.main).toBe('Tourte de pomme sucree');
    expect(dish.second).toBe('avec de la poire croquante');
  });
});
