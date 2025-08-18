import { Ingredient } from '@/types/data/ingredient';
import { Plat } from '@/types/data/plat';
import { Adjectif } from '@/types/data/adjectif';
import { Pre } from '@/types/data/pre';
import { Post } from '@/types/data/post';
import { Lien } from '@/types/data/lien';
import { Title } from '@/types/data/title';
import { Complement } from '@/types/data/complement';

export interface Menu {
  ingredients: Ingredient[];
  plats: Plat[];
  adjectifs: Adjectif[];
  pres: Pre[];
  posts: Post[];
  liens: Lien[];
  titles: Title[];
  complements: Complement[];
}
