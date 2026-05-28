'use client';

import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';
import {
  ChefHatIcon,
  DrinkIcon,
  Fire02Icon,
  Fish,
  NaturalFoodIcon,
  SnowIcon,
  SteakIcon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { DishIcon } from '@/types/dish-icon';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const iconConfig = {
  vegetarian: {
    icon: NaturalFoodIcon,
    label: 'Plat végétarien',
    animationClass: 'dish-icon-vegetarian',
  },
  spicy: {
    icon: Fire02Icon,
    label: 'Plat épicé',
    animationClass: 'dish-icon-spicy',
  },
  alcohol: {
    icon: DrinkIcon,
    label: 'Plat alcoolisé',
    animationClass: 'dish-icon-alcohol',
  },
  meat: {
    icon: SteakIcon,
    label: 'Contient de la viande',
    animationClass: 'dish-icon-meat',
  },
  fish: {
    icon: Fish,
    label: 'Contient du poisson',
    animationClass: 'dish-icon-fish',
  },
  frozen: {
    icon: SnowIcon,
    label: 'Ingrédients surgelés',
    animationClass: 'dish-icon-frozen',
  },
  shareable: {
    icon: UserGroupIcon,
    label: 'À partager',
    animationClass: 'dish-icon-shareable',
  },
  chefRecommendation: {
    icon: ChefHatIcon,
    label: 'Recommandation du chef',
    animationClass: 'dish-icon-chef',
  },
} satisfies Record<DishIcon, { icon: IconSvgElement; label: string; animationClass: string }>;

export default function DishIcons({
  icons,
  className,
}: {
  icons: readonly DishIcon[];
  className?: string;
}) {
  if (icons.length === 0) {
    return null;
  }

  return (
    <span
      className={cn('inline-flex items-center gap-1 text-primary', className)}
      role="img"
      aria-label={icons.map((icon) => iconConfig[icon].label).join(', ')}
    >
      {icons.map((icon) => {
        const config = iconConfig[icon];

        return (
          <Tooltip key={icon}>
            <TooltipTrigger asChild>
              <span
                className={cn(
                  'dish-icon-badge inline-flex size-5 items-center justify-center rounded-full border border-primary/25 bg-primary/5',
                  config.animationClass,
                )}
                tabIndex={0}
                aria-label={config.label}
              >
                <HugeiconsIcon
                  icon={config.icon}
                  strokeWidth={2}
                  className="size-3.5"
                  aria-hidden="true"
                />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              {config.label}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </span>
  );
}
