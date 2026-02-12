import { beforeEach, describe, expect, it } from 'vitest';
import generateSauce from '@/lib/menu/generate-sauce';
import { alreadyUsed } from '@/lib/ssr-cache';
import { menuData, plat } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';

describe('lib/menu/generate-sauce.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
  });

  it('generates a sauce label', () => {
    const sauce = generateSauce(menuData, plat, TypePlat.DESSERT, 0, () => 0);
    expect(sauce).toContain('sauce');
    expect(sauce).toContain('caramel');
  });
});
