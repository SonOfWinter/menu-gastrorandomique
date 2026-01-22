import React from 'react';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';
import { Position } from '@/app/main';
import { cn } from '@/lib/utils';

const menuContainerVariants = cva(
  'absolute block opacity-0 bg-red transition-all duration-500 ease-in-out',
  {
    variants: {
      variant: {
        'main': '',
        'info': '',
        'right': 'opacity-100',
        'left': 'opacity-100',
        'pending': '',
      },
    },
    defaultVariants: {
      variant: 'main',
    },
  },
);
export default function MenuContainer({
  className,
  variant = 'main',
  ...props
}: React.ComponentProps<'section'>
  & VariantProps<typeof menuContainerVariants>
  & { variant: Position }
  & {}) {

  return (
    <section
      className={cn(menuContainerVariants({ variant }), className)}
      {...props}
    >
      Menu
    </section>
  );
}
