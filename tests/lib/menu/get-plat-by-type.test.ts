import { beforeEach, describe, expect, it } from 'vitest';
import getPlatByType from '@/lib/menu/get-plat-by-type';
import { TypePlat } from '@/types/enums/type-plat';
import { plat } from './fixtures';
import { alreadyUsed } from '@/lib/ssr-cache';

describe('lib/menu/get-plat-by-type.ts', () => {
  beforeEach(() => {
    alreadyUsed.plats.length = 0;
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('selects a plat by type', () => {
    const selected = getPlatByType([plat], TypePlat.DESSERT, () => 0);
    expect(selected.id).toBe('plat-1');
  });

  it('avoids selecting an already used plat name when another one is available', () => {
    const otherPlat = { ...plat, id: 'plat-2', nom: 'tourte' };

    const first = getPlatByType([plat, otherPlat], TypePlat.DESSERT, () => 0);
    const second = getPlatByType([plat, otherPlat], TypePlat.DESSERT, () => 0);

    expect(first.id).toBe('plat-1');
    expect(second.id).toBe('plat-2');
  });

  it('falls back to already used plat names when every matching plat is used', () => {
    const first = getPlatByType([plat], TypePlat.DESSERT, () => 0);
    const second = getPlatByType([plat], TypePlat.DESSERT, () => 0);

    expect(first.id).toBe('plat-1');
    expect(second.id).toBe('plat-1');
  });
});
