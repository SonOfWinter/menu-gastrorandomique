import { describe, expect, it } from 'vitest';
import formatIngredientName from '@/lib/menu/format-ingredient-name';
import { ingredientOne } from './fixtures';

describe('lib/menu/format-ingredient-name.ts', () => {
  it('returns the ingredient name when there are no post adjectives', () => {
    expect(formatIngredientName(ingredientOne, () => 0)).toBe('pomme');
  });

  it('returns the ingredient name when the empty variant is selected', () => {
    expect(formatIngredientName({
      ...ingredientOne,
      postAdjectifs: ['', 'rouge'],
    }, () => 0)).toBe('pomme');
  });

  it('adds the selected post adjective after the ingredient name', () => {
    expect(formatIngredientName({
      ...ingredientOne,
      postAdjectifs: ['', 'rouge'],
    }, () => 0.99)).toBe('pomme rouge');
  });
});
