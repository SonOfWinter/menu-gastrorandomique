import React, {
  Dispatch,
  SetStateAction,
} from 'react';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';
import {
  Button,
} from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Position,
  Transition,
} from '@/app/main';
import DiceIcon from '@/components/dice-icon';

const menuVariants = cva(
  'relative px-2.5 py-4 flex flex-col bg-primary h-full top-0 transition-all duration-500 ease-in-out',
  {
    variants: {
      variant: {
        'main': 'w-1/2',
        'info': 'w-1/2',
        'right': 'items-end justify-between w-full -translate-x-[calc(100%-60px)]',
        'left': 'items-start justify-between w-full translate-x-[calc(100%-60px)]',
        'pending': 'w-full ',
      },
    },
    defaultVariants: {
      variant: 'main',
    },
  },
);

export default function Menu({
  className,
  variant = 'main',
  setTransition,
  setPosition,
  ...props
}: React.ComponentProps<'section'>
  & VariantProps<typeof menuVariants>
  & {
  variant: Position,
  setTransition: Dispatch<SetStateAction<Transition>>;
  setPosition: Dispatch<SetStateAction<Position>>;
}
  & {}) {
  return (
    <section
      className={cn(menuVariants({ variant }), className)}
      {...props}
    >
      <h1 className={cn('hidden', { 'block': variant === 'main' })}>
        Menu
      </h1>
      <Button
        size="icon-lg"
        variant="secondary"
        type="button"
        className={cn('hidden', { 'block': variant === 'main' })}
        onClick={() => setTransition('right-to-left')}
      >
        {`+`}
      </Button>
      <Button
        size="icon-lg"
        variant="secondary"
        type="button"
        className={cn('hidden', { 'block': variant === 'left' || variant === 'right' })}
        onClick={() => setPosition('main')}
      >
        M
      </Button>
      <Button
        size="icon-lg"
        variant="default"
        type="button"
        className={cn('rumble-hover hover:bg-primary hidden scale-300 transition-all duration-500 ease-in-out opacity-0', {
          'opacity-100 block': variant === 'left' || variant === 'right',
          'translate-x-1/2': variant === 'right',
          '-translate-x-1/2': variant === 'left'
        })}
        onClick={() => {
          if (variant === 'left') {
            setTransition('left-to-right');
          }
          if (variant === 'right') {
            setTransition('right-to-left');
          }
        }}
      >
        <DiceIcon className="m-auto" color="#FFFFFF"/>
      </Button>
      <Button
        size="icon-lg"
        variant="secondary"
        type="button"
        className={cn('hidden', { 'block': variant === 'left' || variant === 'right' })}
        onClick={() => setPosition('main')}
      >
        M
      </Button>
    </section>
  );
}
