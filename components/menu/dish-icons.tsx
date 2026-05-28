'use client';

import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';
import {
  DrinkIcon,
  Fire02Icon,
  Fish,
  LeafyGreenIcon,
  SteakIcon,
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
    icon: LeafyGreenIcon,
    label: 'Plat végétarien',
  },
  spicy: {
    icon: Fire02Icon,
    label: 'Plat épicé',
  },
  alcohol: {
    icon: DrinkIcon,
    label: 'Plat alcoolisé',
  },
  meat: {
    icon: SteakIcon,
    label: 'Contient de la viande',
  },
  fish: {
    icon: Fish,
    label: 'Contient du poisson',
  },
} satisfies Record<DishIcon, { icon: IconSvgElement; label: string }>;

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
              <span className="inline-flex size-5 items-center justify-center rounded-full border border-primary/25 bg-primary/5">
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
