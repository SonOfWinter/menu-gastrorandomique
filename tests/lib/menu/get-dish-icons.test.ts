import { describe, expect, it } from 'vitest';
import getDishIcons from '@/lib/menu/get-dish-icons';
import { Ingredient } from '@/types/data/ingredient';
import { ingredientOne } from './fixtures';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';

function ingredient(types: TypeAliment[], isSpicy = false): Ingredient {
  return {
    ...ingredientOne,
    types,
    isSpicy,
  };
}

describe('lib/menu/get-dish-icons.ts', () => {
  it('marks a dish vegetarian when no animal meat or fish type is present', () => {
    expect(getDishIcons([
      ingredient([TypeAliment.LEGUME]),
      ingredient([TypeAliment.FROMAGE]),
    ], TypePlat.PLAT)).toContain('vegetarian');
  });

  it('keeps non-exclusive matching icons', () => {
    expect(getDishIcons([
      ingredient([TypeAliment.VIANDE_ROUGE]),
      ingredient([TypeAliment.POISSON]),
      ingredient([TypeAliment.ALCOOL]),
      ingredient([TypeAliment.EPICE], true),
    ], TypePlat.PLAT)).toEqual(['spicy', 'alcohol']);
  });

  it('marks meat only when every selected ingredient is meat-based', () => {
    expect(getDishIcons([
      ingredient([TypeAliment.VIANDE_ROUGE]),
      ingredient([TypeAliment.CHARCUTERIE]),
    ], TypePlat.PLAT)).toEqual(['meat']);

    expect(getDishIcons([
      ingredient([TypeAliment.VIANDE_ROUGE]),
      ingredient([TypeAliment.LEGUME]),
    ], TypePlat.PLAT)).not.toContain('meat');
  });

  it('marks fish only when every selected ingredient is fish-based', () => {
    expect(getDishIcons([
      ingredient([TypeAliment.POISSON]),
      ingredient([TypeAliment.FRUIT_DE_MER]),
    ], TypePlat.PLAT)).toEqual(['fish']);

    expect(getDishIcons([
      ingredient([TypeAliment.POISSON]),
      ingredient([TypeAliment.LEGUME]),
    ], TypePlat.PLAT)).not.toContain('fish');
  });

  it('does not show vegetarian, meat, or fish icons for desserts', () => {
    expect(getDishIcons([
      ingredient([TypeAliment.VIANDE_ROUGE]),
      ingredient([TypeAliment.POISSON]),
      ingredient([TypeAliment.ALCOOL]),
      ingredient([TypeAliment.EPICE], true),
    ], TypePlat.DESSERT)).toEqual(['spicy', 'alcohol']);
  });
});
