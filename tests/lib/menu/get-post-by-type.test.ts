import { beforeEach, describe, expect, it } from 'vitest';
import getPostByType from '@/lib/menu/get-post-by-type';
import { TypePlat } from '@/types/enums/type-plat';
import { alreadyUsed } from '@/lib/ssr-cache';
import { post } from './fixtures';

describe('lib/menu/get-post-by-type.ts', () => {
  beforeEach(() => {
    alreadyUsed.plats.length = 0;
    alreadyUsed.ingredients.length = 0;
    alreadyUsed.adjectifs.length = 0;
    alreadyUsed.pres.length = 0;
    alreadyUsed.posts.length = 0;
    alreadyUsed.sauceTypes.length = 0;
  });

  it('does not reuse a post while unused posts are available', () => {
    const posts = [
      {
        ...post,
        id: 'post-japan',
        nom: 'à la japonaise',
      },
      {
        ...post,
        id: 'post-house',
        nom: 'maison',
      },
    ];

    const firstPost = getPostByType(posts, TypePlat.DESSERT, () => 0);
    const secondPost = getPostByType(posts, TypePlat.DESSERT, () => 0);

    expect(firstPost.nom).toBe('à la japonaise');
    expect(secondPost.nom).toBe('maison');
  });
});
