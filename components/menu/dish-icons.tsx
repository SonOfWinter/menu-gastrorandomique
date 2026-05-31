'use client';

import * as React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';
import {
  Castle01Icon,
  ChefHatIcon,
  CrownIcon,
  DrinkIcon,
  ExclamationMarkBigIcon,
  Fire02Icon,
  Fish,
  KidIcon,
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
  signature: {
    icon: CrownIcon,
    label: 'Plat signature',
    animationClass: 'dish-icon-signature',
  },
  limitedEdition: {
    icon: ExclamationMarkBigIcon,
    label: 'Édition limitée',
    animationClass: 'dish-icon-limited',
  },
  kidsDish: {
    icon: KidIcon,
    label: 'Plat enfant',
    animationClass: 'dish-icon-child',
  },
  historicalRecipe: {
    icon: Castle01Icon,
    label: 'Recette historique',
    animationClass: 'dish-icon-historical',
  },
} satisfies Record<DishIcon, { icon: IconSvgElement; label: string; animationClass: string }>;

export default function DishIcons({
  icons,
  className,
}: {
  icons: readonly DishIcon[];
  className?: string;
}) {
  const [activeIcon, setActiveIcon] = React.useState<DishIcon | null>(null);
  const tooltipTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
  }, []);

  if (icons.length === 0) {
    return null;
  }

  const clearTooltipTimeout = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
      tooltipTimeoutRef.current = null;
    }
  };

  const showTooltip = (icon: DishIcon) => {
    clearTooltipTimeout();
    setActiveIcon(icon);
    tooltipTimeoutRef.current = setTimeout(() => {
      setActiveIcon((currentIcon) => currentIcon === icon ? null : currentIcon);
      tooltipTimeoutRef.current = null;
    }, 2500);
  };

  return (
    <span
      className={cn('inline-flex items-center gap-1 text-primary', className)}
      role="group"
      aria-label={icons.map((icon) => iconConfig[icon].label).join(', ')}
    >
      {icons.map((icon) => {
        const config = iconConfig[icon];

        return (
          <Tooltip
            key={icon}
            open={activeIcon === icon}
            onOpenChange={(open) => {
              clearTooltipTimeout();
              setActiveIcon(open ? icon : null);
            }}
          >
            <TooltipTrigger asChild>
              <button
                type="button"
                className={cn(
                  'dish-icon-badge inline-flex size-5 items-center justify-center rounded-full border border-primary/25 bg-primary/5 p-0 text-current',
                  config.animationClass,
                )}
                aria-label={config.label}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  showTooltip(icon);
                }}
              >
                <HugeiconsIcon
                  icon={config.icon}
                  strokeWidth={2}
                  className="size-3.5"
                  aria-hidden="true"
                />
              </button>
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
