import { describe, expect, it } from 'vitest';
import getPlatByType from '@/lib/menu/get-plat-by-type';
import { TypePlat } from '@/types/enums/type-plat';
import { plat } from './fixtures';

describe('lib/menu/get-plat-by-type.ts', () => {
  it('selects a plat by type', () => {
    const selected = getPlatByType([plat], TypePlat.DESSERT, () => 0);
    expect(selected.id).toBe('plat-1');
  });
});
