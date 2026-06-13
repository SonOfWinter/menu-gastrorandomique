export enum TypePlat {
  ENTREE = 'entree',
  PLAT = 'plat',
  DESSERT = 'dessert'
}

export const TYPE_PLAT_BITS: Record<TypePlat, number> = {
  [TypePlat.ENTREE]: 1 << 0,
  [TypePlat.PLAT]: 1 << 1,
  [TypePlat.DESSERT]: 1 << 2,
};
