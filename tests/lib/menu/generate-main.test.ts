import { beforeEach, describe, expect, it } from 'vitest';
import generateMain from '@/lib/menu/generate-main';
import { alreadyUsed } from '@/lib/ssr-cache';
import { menuData, plat, ingredientOne } from './fixtures';

const ingredients = [ingredientOne];

describe('lib/menu/generate-main.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
  });

  it('generates a main dish label', () => {
    const main = generateMain(menuData, plat, ingredients, 0, () => 0);
    expect(main).toBe('Tarte de pomme sucree');
  });
});
