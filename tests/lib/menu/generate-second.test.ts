import { beforeEach, describe, expect, it } from 'vitest';
import generateSecond from '@/lib/menu/generate-second';
import { alreadyUsed } from '@/lib/ssr-cache';
import { menuData, plat, ingredientOne } from './fixtures';

const ingredients = [ingredientOne];

describe('lib/menu/generate-second.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
  });

  it('generates a secondary dish label', () => {
    const second = generateSecond(menuData, plat, ingredients, 0, () => 0);
    expect(second).toBe('au de la pomme sucree');
  });
});
