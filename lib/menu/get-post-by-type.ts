import { Post } from '@/types/data/post';
import { TypePlat } from '@/types/enums/type-plat';
import getRandom from '@/lib/menu/get-random';
import { RandomGenerator } from '@/lib/utils/seeded-rng';
import {
  addPostsAlreadyUsed,
  getPostsAlreadyUsed,
} from '@/lib/ssr-cache';

const getPostByType = (
  posts: Post[],
  mainType: TypePlat,
  rng?: RandomGenerator,
): Post => {
  const typedPosts = posts.filter((item: Post) =>
    item.types.includes(mainType),
  );
  const availablePosts = typedPosts.length > 0 ? typedPosts : posts;
  const unusedPosts = availablePosts.filter((item: Post) =>
    !getPostsAlreadyUsed().includes(item.id),
  );
  const selected = getRandom(
    unusedPosts.length > 0 ? unusedPosts : availablePosts,
    rng,
  );
  addPostsAlreadyUsed(selected.id);
  return selected;
};

export default getPostByType;
