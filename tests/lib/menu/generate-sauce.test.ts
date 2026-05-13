import { beforeEach, describe, expect, it } from 'vitest';
import generateSauce from '@/lib/menu/generate-sauce';
import { alreadyUsed } from '@/lib/ssr-cache';
import { menuData, plat } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';

describe('lib/menu/generate-sauce.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('generates a sauce label', () => {
    const sauce = generateSauce(menuData, plat, TypePlat.DESSERT, 0, () => 0);
    expect(sauce).toContain('sauce');
    expect(sauce).toContain('caramel');
  });

  it('does not reuse a sauce type while unused sauce types are available', () => {
    const sauceTypes = [
      {
        ...menuData.sauceTypes[0],
        id: 'sauce-type-1',
        nom: 'pesto',
      },
      {
        ...menuData.sauceTypes[0],
        id: 'sauce-type-2',
        nom: 'jus',
      },
    ];
    const data = {
      ...menuData,
      sauceTypes,
    };

    const firstSauce = generateSauce(data, plat, TypePlat.DESSERT, 0, () => 0);
    const secondSauce = generateSauce(data, plat, TypePlat.DESSERT, 0, () => 0);

    expect(firstSauce).toContain('pesto');
    expect(secondSauce).toContain('jus');
  });
});
