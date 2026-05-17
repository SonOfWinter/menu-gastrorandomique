import { Adjectif } from '@/types/data/adjectif';
import { Ingredient } from '@/types/data/ingredient';
import { Lien } from '@/types/data/lien';
import { Plat } from '@/types/data/plat';
import { Post } from '@/types/data/post';
import { Pre } from '@/types/data/pre';
import { SauceType } from '@/types/data/sauce-type';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';

export type MenuIndexes = {
  ingredients: Ingredient[];
  adjectifs: Adjectif[];
  liens: Lien[];
  plats: Plat[];
  posts: Post[];
  pres: Pre[];
  sauceTypes: SauceType[];
  ingredientsByType: Record<TypeAliment, Ingredient[]>;
  adjectifsByType: Record<TypeAliment, Adjectif[]>;
  liensByType: Record<TypeAliment, Lien[]>;
  platsByType: Record<TypePlat, Plat[]>;
  postsByType: Record<TypePlat, Post[]>;
  presByType: Record<TypePlat, Pre[]>;
  sauceTypesByType: Record<TypePlat, SauceType[]>;
};
