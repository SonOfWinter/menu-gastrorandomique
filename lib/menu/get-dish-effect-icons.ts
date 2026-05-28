import { DishIcon } from '@/types/dish-icon';
import { TypePlat } from '@/types/enums/type-plat';

const effectChance = 30;

function hashString(value: string): number {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (Math.imul(31, hash) + value.charCodeAt(index)) % 2147483647;
  }

  return Math.abs(hash);
}

function hasEffect(seed: string): boolean {
  return hashString(seed) % effectChance === 0;
}

export default function getDishEffectIcons(
  typePlat: TypePlat,
  main: string,
  second: string,
  sauce: string | null,
): DishIcon[] {
  const dishText = `${typePlat}|${main}|${second}|${sauce ?? ''}`;
  const icons: DishIcon[] = [];

  if (hasEffect(`frozen|${dishText}`)) {
    icons.push('frozen');
  }

  if (typePlat === TypePlat.ENTREE && hasEffect(`shareable|${dishText}`)) {
    icons.push('shareable');
  }

  if (hasEffect(`chefRecommendation|${dishText}`)) {
    icons.push('chefRecommendation');
  }

  if (hasEffect(`signature|${dishText}`)) {
    icons.push('signature');
  }

  if (hasEffect(`limitedEdition|${dishText}`)) {
    icons.push('limitedEdition');
  }

  if (hasEffect(`kidsDish|${dishText}`)) {
    icons.push('kidsDish');
  }

  if (hasEffect(`historicalRecipe|${dishText}`)) {
    icons.push('historicalRecipe');
  }

  return icons;
}
