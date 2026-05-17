import { TypePlat } from '@/types/enums/type-plat';

export const platTypePresets = {
  entry: [TypePlat.ENTREE],
  main: [TypePlat.PLAT],
  dessert: [TypePlat.DESSERT],
  entryAndMain: [TypePlat.ENTREE, TypePlat.PLAT],
  entryAndDessert: [TypePlat.ENTREE, TypePlat.DESSERT],
  mainAndDessert: [TypePlat.PLAT, TypePlat.DESSERT],
  allCourses: [TypePlat.ENTREE, TypePlat.PLAT, TypePlat.DESSERT],
  allCoursesEntryDessertMain: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
} satisfies Record<string, TypePlat[]>;
