import { beforeEach, describe, expect, it } from 'vitest';
import generateSauce from '@/lib/menu/generate-sauce';
import { alreadyUsed } from '@/lib/ssr-cache';
import { createMenuData, menuData, plat } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';
import { TypeDeterminant } from '@/types/enums/type-determinant';

describe('lib/menu/generate-sauce.ts', () => {
  beforeEach(() => {
    alreadyUsed.plats.length = 0;
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.liens.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('generates a sauce label', () => {
    const sauce = generateSauce(menuData, plat, TypePlat.DESSERT, 0, () => 0);
    expect(sauce).toContain('sauce');
    expect(sauce).toContain('caramel');
  });

  it('does not add a space after a typographic apostrophe determinant', () => {
    const sauce = generateSauce(
      createMenuData({
        sauceTypes: [
          {
            ...menuData.indexes.sauceTypesByType[TypePlat.DESSERT][0],
            determinants: {
              ...menuData.indexes.sauceTypesByType[TypePlat.DESSERT][0].determinants,
              [TypeDeterminant.PRINCIPAL]: 'd’',
            },
          },
        ],
      }),
      plat,
      TypePlat.DESSERT,
      0,
      () => 0,
    );

    expect(sauce).toContain('sauce d’caramel d’oignon');
  });

  it('does not reuse a sauce type while unused sauce types are available', () => {
    const sauceTypes = [
      {
        ...menuData.indexes.sauceTypesByType[TypePlat.DESSERT][0],
        id: 'sauce-type-1',
        nom: 'pesto',
      },
      {
        ...menuData.indexes.sauceTypesByType[TypePlat.DESSERT][0],
        id: 'sauce-type-2',
        nom: 'jus',
      },
    ];
    const data = createMenuData({
      sauceTypes,
    });

    const firstSauce = generateSauce(data, plat, TypePlat.DESSERT, 0, () => 0);
    const secondSauce = generateSauce(data, plat, TypePlat.DESSERT, 0, () => 0);

    expect(firstSauce).toContain('pesto');
    expect(secondSauce).toContain('jus');
  });
});
