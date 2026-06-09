import { describe, expect, it } from 'vitest';
import {
  getCompatibilityMask,
  getMaskIndexes,
  hasCompatibleMask,
} from '@/lib/menu/compatibility-mask';
import { TYPE_ALIMENT_BITS, TypeAliment } from '@/types/enums/type-aliment';
import { TYPE_PLAT_BITS, TypePlat } from '@/types/enums/type-plat';
import { THEME_BITS, Theme } from '@/types/enums/theme';

describe('lib/menu/compatibility-mask.ts', () => {
  it('calculates masks from stable bit tables', () => {
    const mask = getCompatibilityMask(
      [TypeAliment.FRUIT, TypeAliment.SUCRE],
      TYPE_ALIMENT_BITS,
    );

    expect(mask).toBe(TYPE_ALIMENT_BITS[TypeAliment.FRUIT] | TYPE_ALIMENT_BITS[TypeAliment.SUCRE]);
  });

  it('detects positive and negative compatibility', () => {
    const itemMask = getCompatibilityMask([TypeAliment.FRUIT], TYPE_ALIMENT_BITS);

    expect(hasCompatibleMask(itemMask, TYPE_ALIMENT_BITS[TypeAliment.FRUIT])).toBe(true);
    expect(hasCompatibleMask(itemMask, TYPE_ALIMENT_BITS[TypeAliment.VIANDE_ROUGE])).toBe(false);
  });

  it('keeps TypeAliment bit values stable', () => {
    expect(TYPE_ALIMENT_BITS).toEqual({
      [TypeAliment.ALCOOL]: 1,
      [TypeAliment.BASE]: 2,
      [TypeAliment.CEREALE]: 4,
      [TypeAliment.CHAMPIGNON]: 8,
      [TypeAliment.FROMAGE]: 16,
      [TypeAliment.FRUIT]: 32,
      [TypeAliment.FRUIT_A_COQUE]: 64,
      [TypeAliment.FRUIT_DE_MER]: 128,
      [TypeAliment.HERBE]: 256,
      [TypeAliment.EPICE]: 512,
      [TypeAliment.CHARCUTERIE]: 1024,
      [TypeAliment.LAITIER]: 2048,
      [TypeAliment.LEGUME]: 4096,
      [TypeAliment.LIQUIDE]: 8192,
      [TypeAliment.POISSON]: 16384,
      [TypeAliment.SALADE]: 32768,
      [TypeAliment.SAUCE]: 65536,
      [TypeAliment.SOFT]: 131072,
      [TypeAliment.SUCRE]: 262144,
      [TypeAliment.VIANDE_BLANCHE]: 524288,
      [TypeAliment.VIANDE_ROUGE]: 1048576,
    });
  });

  it('keeps TypePlat bit values stable', () => {
    expect(TYPE_PLAT_BITS).toEqual({
      [TypePlat.ENTREE]: 1,
      [TypePlat.PLAT]: 2,
      [TypePlat.DESSERT]: 4,
    });
  });

  it('keeps Theme bit values stable', () => {
    expect(THEME_BITS).toEqual({
      [Theme.HIVER]: 1,
      [Theme.ETE]: 2,
      [Theme.PRINTEMPS]: 4,
      [Theme.AUTOMNE]: 8,
      [Theme.MEDIEVAL]: 16,
    });
  });

  it('builds indexes only for requested masks', () => {
    const items = [
      { mask: TYPE_ALIMENT_BITS[TypeAliment.FRUIT] },
      { mask: TYPE_ALIMENT_BITS[TypeAliment.LEGUME] },
    ];

    const index = getMaskIndexes(
      items,
      [TYPE_ALIMENT_BITS[TypeAliment.FRUIT]],
      (item) => item.mask,
    );

    expect(index).toEqual({ [TYPE_ALIMENT_BITS[TypeAliment.FRUIT]]: [0] });
    expect(index[TYPE_ALIMENT_BITS[TypeAliment.LEGUME]]).toBeUndefined();
  });
});
