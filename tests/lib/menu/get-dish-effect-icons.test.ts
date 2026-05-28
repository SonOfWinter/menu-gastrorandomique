import { describe, expect, it } from 'vitest';
import getDishEffectIcons from '@/lib/menu/get-dish-effect-icons';
import { TypePlat } from '@/types/enums/type-plat';

describe('lib/menu/get-dish-effect-icons.ts', () => {
  it('can mark any dish as frozen with a deterministic one in thirty chance', () => {
    expect(getDishEffectIcons(TypePlat.PLAT, 'main-1', 'second', null))
      .toContain('frozen');
    expect(getDishEffectIcons(TypePlat.DESSERT, 'main-31', 'second', null))
      .toContain('frozen');
  });

  it('only marks starters as shareable', () => {
    expect(getDishEffectIcons(TypePlat.ENTREE, 'main-170', 'second', null))
      .toContain('shareable');
    expect(getDishEffectIcons(TypePlat.PLAT, 'main-170', 'second', null))
      .not.toContain('shareable');
  });

  it('can mark any dish as recommended by the chef', () => {
    expect(getDishEffectIcons(TypePlat.PLAT, 'main-130', 'second', null))
      .toContain('chefRecommendation');
  });

  it('can mark any dish as a signature dish', () => {
    expect(getDishEffectIcons(TypePlat.PLAT, 'main-12', 'second', null))
      .toContain('signature');
  });

  it('can mark any dish as limited edition', () => {
    expect(getDishEffectIcons(TypePlat.PLAT, 'main-1', 'second', null))
      .toContain('limitedEdition');
  });

  it('can mark any dish as a kids dish', () => {
    expect(getDishEffectIcons(TypePlat.PLAT, 'main-80', 'second', null))
      .toContain('kidsDish');
  });

  it('can mark any dish as a historical recipe', () => {
    expect(getDishEffectIcons(TypePlat.PLAT, 'main-5', 'second', null))
      .toContain('historicalRecipe');
  });
});
