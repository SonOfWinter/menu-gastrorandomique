import React, {
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import DiceIcon from '@/components/dice-icon';
import useKeyboardShortcut from '@/lib/client/use-keyboard-shortcut';
import {
  Position,
  Transition,
} from '@/app/main';

const diceButtonVariants = cva(
  'z-90 absolute block bg-primary hover:bg-primary scale-300 transition-all duration-500 ease-in-out cursor-pointer',
  {
    variants: {
      variant: {
        'main': 'rumble-hover',
        'info': 'hidden',
        'right': 'rumble-hover translate-y-[44dvh] md:translate-y-0 md:-translate-x-[44vw] lg:-translate-x-[46vw] xl:-translate-x-[47vw]',
        'left': 'rumble-hover translate-y-[44dvh] md:translate-y-0 md:translate-x-[44vw] lg:translate-x-[46vw] xl:translate-x-[47vw]',
        'pending': 'cursor-progress',
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
  isLoading = false,
  ...props
}: React.ComponentProps<'button'>
  & VariantProps<typeof diceButtonVariants>
  & {
  variant: Position,
  setTransition: Dispatch<SetStateAction<Transition>>;
  isLoading?: boolean;
}
  & {}) {

  const changeTransition = useCallback(() => {
    if (variant === 'pending' || isLoading) {
      return;
    }
    if (variant === 'left') {
      setTransition('left-to-right');
    }
    if (variant === 'right' || variant === 'main') {
      setTransition('right-to-left');
    }
  }, [isLoading, setTransition, variant]);

  useKeyboardShortcut('r', changeTransition, {
    enabled: !(variant === 'pending' || isLoading),
  });

  return (
    <Button
      size="icon-lg"
      variant="default"
      type="button"
      disabled={variant === 'pending' || isLoading}
      className={cn(diceButtonVariants({ variant }), className)}
      onClick={changeTransition}
      {...props}
    >
      <DiceIcon
        className="m-auto w-5 h-5"
        color="#FFFFFF"
      />
    </Button>
  );
}
