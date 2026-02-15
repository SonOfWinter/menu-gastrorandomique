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
import useKeyboardShortcut from '@/lib/client/use-keyboard-shortcut';
import { Position } from '@/app/main';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';

const navigationVariants = cva(
  'z-30 relative flex justify-between py-2.5 px-4 md:px-2.5 md:py-4 flex flex-col h-full top-0 ' +
  'transition-all duration-500 ease-in-out bg-primary',
  {
    variants: {
      variant: {
        'main': 'w-full md:w-1/2',
        'info': 'w-full md:w-1/2',
        'right': 'items-start md:items-end w-full translate-y-[calc(100%-60px)] md:translate-y-0 md:-translate-x-[calc(100%-60px)]',
        'left': 'items-start w-full translate-y-[calc(100%-60px)] md:translate-y-0 md:translate-x-[calc(100%-60px)]',
        'pending': 'w-full items-center',
      },
    },
    defaultVariants: {
      variant: 'main',
    },
  },
);

export default function Navigation({
  className,
  variant = 'main',
  setPosition,
  ...props
}: React.ComponentProps<'section'>
  & VariantProps<typeof navigationVariants>
  & {
  variant: Position,
  setPosition: Dispatch<SetStateAction<Position>>;
}
  & {}) {
  useKeyboardShortcut('m', () => setPosition('main'));
  useKeyboardShortcut('i', () => setPosition('info'));

  return (
    <section
      className={cn(navigationVariants({ variant }), className)}
      {...props}
    >
      <Button
        size="icon-lg"
        variant="default"
        type="button"
        className={cn('hidden', { 'block': variant === 'left' || variant === 'right' })}
        onClick={() => setPosition('main')}
      >
        <HugeiconsIcon
          icon={Cancel01Icon}
          size={32}
          color="currentColor"
          strokeWidth={1.5}
          className="m-auto w-8 h-8"
        />
      </Button>
      <Button
        size="icon"
        variant="default"
        type="button"
        className={cn(
          'border-white border-2 absolute bottom-4 left-1/2 -translate-x-1/2',
          {
            'hidden': variant !== 'main' && variant !== 'info',
          },
        )}
        onClick={() => {
          if (variant === 'main') {
            setPosition('info');
          } else if (variant === 'info') {
            setPosition('main');
          }
        }}
        aria-label="Informations"
      >
        {variant === 'main'
          ? 'i'
          : <HugeiconsIcon
            icon={Cancel01Icon}
            size={32}
            color="currentColor"
            strokeWidth={1.5}
            className="m-auto w-8 h-8"
          />
        }
      </Button>
    </section>
  );
}
