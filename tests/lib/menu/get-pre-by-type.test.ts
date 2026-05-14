import { beforeEach, describe, expect, it } from 'vitest';
import getPreByType from '@/lib/menu/get-pre-by-type';
import { TypePlat } from '@/types/enums/type-plat';
import { alreadyUsed } from '@/lib/ssr-cache';
import { pre } from './fixtures';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';

describe('lib/menu/get-pre-by-type.ts', () => {
  beforeEach(() => {
    alreadyUsed.plats.length = 0;
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('does not reuse a pre while unused pres are available', () => {
    const pres = [
      {
        ...pre,
        id: 'pre-subtle',
        noms: {
          ...pre.noms,
          [Genre.FEMININ]: {
            ...pre.noms[Genre.FEMININ],
            [Nombre.SINGULIER]: 'la subtile',
          },
        },
      },
      {
        ...pre,
        id: 'pre-captivating',
        noms: {
          ...pre.noms,
          [Genre.FEMININ]: {
            ...pre.noms[Genre.FEMININ],
            [Nombre.SINGULIER]: 'la captivante',
          },
        },
      },
    ];

    const firstPre = getPreByType(pres, TypePlat.DESSERT, () => 0);
    const secondPre = getPreByType(pres, TypePlat.DESSERT, () => 0);

    expect(firstPre.id).toBe('pre-subtle');
    expect(secondPre.id).toBe('pre-captivating');
  });
});
