import { Post } from '@/types/data/post';
import { TYPE_PLAT_BITS, TypePlat } from '@/types/enums/type-plat';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import {
  addPostsAlreadyUsed,
  getPostsAlreadyUsed,
} from '@/lib/ssr-cache';
import { getCompatibilityMask, hasCompatibleMask } from '@/lib/menu/compatibility-mask';
import { filterItemsByTheme, ThemeContext } from '@/lib/menu/theme';
import getRandom from '@/lib/menu/get-random';

const getPostByType = (
  posts: Post[],
  mainType: TypePlat,
  rng?: RandomGenerator,
  themeContext: ThemeContext = {},
): Post => {
  const requiredMask = TYPE_PLAT_BITS[mainType];
  const themedPosts = filterItemsByTheme(posts, themeContext.theme);
  const typedPosts = themedPosts.filter((item: Post) =>
    hasCompatibleMask(item.compatibilityMask ?? getCompatibilityMask(item.types, TYPE_PLAT_BITS), requiredMask),
  );
  const availablePosts = typedPosts.length > 0 ? typedPosts : themedPosts;
  const unusedPosts = availablePosts.filter((item: Post) =>
    !getPostsAlreadyUsed().includes(item.id as number),
  );
  const selectablePosts = unusedPosts.length > 0 ? unusedPosts : availablePosts;
  const selected = getRandom(selectablePosts, rng);
  addPostsAlreadyUsed(selected.id as number);
  return selected;
};

export default getPostByType;
