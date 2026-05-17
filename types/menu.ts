import { Adjectif } from '@/types/data/adjectif';
import { Complement } from '@/types/data/complement';
import { Ingredient } from '@/types/data/ingredient';
import { Lien } from '@/types/data/lien';
import { Plat } from '@/types/data/plat';
import { Post } from '@/types/data/post';
import { Pre } from '@/types/data/pre';
import { PreSauce } from '@/types/data/pre-sauce';
import { SauceType } from '@/types/data/sauce-type';
import { Title } from '@/types/data/title';
import { MenuIndexes } from '@/types/menu-indexes';

export interface Menu {
  adjectifs: Adjectif[];
  titles: Title[];
  complements: Complement[];
  ingredients: Ingredient[];
  liens: Lien[];
  plats: Plat[];
  posts: Post[];
  pres: Pre[];
  preSauces: PreSauce[];
  sauceTypes: SauceType[];
  indexes: MenuIndexes;
}
