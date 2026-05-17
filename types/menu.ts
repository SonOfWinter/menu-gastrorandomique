import { Title } from '@/types/data/title';
import { Complement } from '@/types/data/complement';
import { PreSauce } from '@/types/data/pre-sauce';
import { MenuIndexes } from '@/types/menu-indexes';

export interface Menu {
  titles: Title[];
  complements: Complement[];
  preSauces: PreSauce[];
  indexes: MenuIndexes;
}
