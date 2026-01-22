import React, {
  Dispatch,
  SetStateAction,
} from 'react';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import DiceIcon from '@/components/dice-icon';
import {
  Position,
  Transition,
} from '@/app/main';

const diceButtonVariants = cva(
  'absolute block bg-primary hover:bg-primary scale-300 transition-all duration-500 ease-in-out',
  {
    variants: {
      variant: {
        'main': 'rumble-hover',
        'info': 'hidden',
        'right': 'rumble-hover translate-y-[40vh] md:translate-y-0 md:-translate-x-[44vw] lg:-translate-x-[46vw]',
        'left': 'rumble-hover translate-y-[40vh] md:translate-y-0 md:translate-x-[44vw] lg:translate-x-[46vw]',
        'pending': '',
      },
    },
    defaultVariants: {
      variant: 'main',
    },
  },
);
export default function DiceButton({
  className,
  variant = 'main',
  setTransition,
  ...props
}: React.ComponentProps<'button'>
  & VariantProps<typeof diceButtonVariants>
  & {
  variant: Position,
  setTransition: Dispatch<SetStateAction<Transition>>;}
  & {}) {

  return (
    <Button
      size="icon-lg"
      variant="default"
      type="button"
      className={cn(diceButtonVariants({ variant }), className)}
      onClick={() => {
        if (variant === 'left') {
          setTransition('left-to-right');
        }
        if (variant === 'right' || variant === 'main') {
          setTransition('right-to-left');
        }
      }}
      {...props}
    >
      <DiceIcon className="m-auto w-5 h-5" color="#FFFFFF"/>
    </Button>
  );
}
