import { Post } from '@/types/data/post';
import { TYPE_PLAT_BITS, TypePlat } from '@/types/enums/type-plat';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import {
  addPostsAlreadyUsed,
  getPostsAlreadyUsed,
} from '@/lib/ssr-cache';
import { getCompatibilityMask, hasCompatibleMask } from '@/lib/menu/compatibility-mask';
import getThemedRandom from '@/lib/menu/get-themed-random';
import {
  getCollectionWeight,
  getTypePlatWeight,
  ThemeContext,
} from '@/lib/menu/theme';

const getPostByType = (
  posts: Post[],
  mainType: TypePlat,
  rng?: RandomGenerator,
  themeContext: ThemeContext = {},
): Post => {
  const requiredMask = TYPE_PLAT_BITS[mainType];
  const typedPosts = posts.filter((item: Post) =>
    hasCompatibleMask(item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_PLAT_BITS), requiredMask),
  );
  const availablePosts = typedPosts.length > 0 ? typedPosts : posts;
  const unusedPosts = availablePosts.filter((item: Post) =>
    !getPostsAlreadyUsed().includes(item.id as number),
  );
  const selectablePosts = unusedPosts.length > 0 ? unusedPosts : availablePosts;
  const selected = getThemedRandom(
    selectablePosts,
    (item) => getCollectionWeight(themeContext.theme, 'posts', item.id as number)
      * getTypePlatWeight(themeContext.theme, item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_PLAT_BITS)),
    rng,
  );
  addPostsAlreadyUsed(selected.id as number);
  return selected;
};

export default getPostByType;
