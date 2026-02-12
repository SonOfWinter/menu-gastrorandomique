import { beforeEach, describe, expect, it } from 'vitest';
import { generateDish } from '@/lib/menu/generate-dish';
import { alreadyUsed } from '@/lib/ssr-cache';
import { menuData } from './fixtures';
import { TypePlat } from '@/types/enums/type-plat';

describe('lib/menu/generate-dish.ts', () => {
  beforeEach(() => {
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
  });

  it('generates a composed dish', () => {
    const dish = generateDish(menuData, TypePlat.DESSERT, 0, () => 0);
    expect(dish.main).toBe('Tarte de pomme sucree');
    expect(dish.second).toBe('au de la poire croquante');
    expect(dish.sauce).toBeNull();
  });
});
