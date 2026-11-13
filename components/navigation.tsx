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
import { Cancel01Icon, Settings01Icon, Tag01Icon } from '@hugeicons/core-free-icons';

function ThemeIndicator({ name, side }: { name: string; side: 'left' | 'right' }) {
  const [visibility, setVisibility] = React.useState<'closed' | 'preview' | 'pinned'>('closed');
  const anchor = React.useRef<HTMLDivElement>(null);
  const bubbleId = React.useId();
  const open = visibility !== 'closed';

  React.useEffect(() => {
    if (!open) return;

    const dismissOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !anchor.current?.contains(event.target)) {
        setVisibility('closed');
      }
    };
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVisibility('closed');
    };

    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('keydown', dismissOnEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('keydown', dismissOnEscape);
    };
  }, [open]);

  const preview = () => setVisibility((current) => current === 'pinned' ? current : 'preview');

  return (
    <div
      ref={anchor}
      className="absolute right-4 top-2.5 md:static md:mt-2"
      onPointerLeave={() => {
        if (!anchor.current?.querySelector(':focus-visible')) {
          setVisibility((current) => current === 'preview' ? 'closed' : current);
        }
      }}
    >
      <div className="relative">
        <Button
          size="icon-lg"
          type="button"
          aria-label={`Thème · ${name}`}
          aria-expanded={open}
          aria-controls={open ? bubbleId : undefined}
          onPointerEnter={(event) => {
            if (event.pointerType === 'mouse') preview();
          }}
          onFocus={preview}
          onBlur={() => setVisibility('closed')}
          onClick={() => setVisibility((current) => current === 'pinned' ? 'closed' : 'pinned')}
        >
          <HugeiconsIcon icon={Tag01Icon} className="size-6" aria-hidden="true" />
        </Button>
        {open && (
          <div
            className={cn(
              'absolute bottom-full -right-1 z-50 w-max max-w-[calc(100vw-2rem)] pb-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:pb-0',
              side === 'left' ? 'md:right-full md:pr-6' : 'md:right-auto md:left-full md:pl-6',
            )}
          >
            <p
              id={bubbleId}
              className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground shadow-md"
            >
              Thème · {name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const navigationVariants = cva(
  'z-30 relative flex py-2.5 px-4 md:px-2.5 md:py-4 flex flex-col h-full top-0 ' +
  'transition-all duration-500 ease-in-out bg-primary',
  {
    variants: {
      variant: {
        'main': 'w-full md:w-1/2',
        'info': 'w-full md:w-1/2',
        'settings': 'w-full md:w-1/2',
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
  onToggleSettings,
  settingsButtonRef,
  themeName,
  ...props
}: React.ComponentProps<'section'>
  & VariantProps<typeof navigationVariants>
  & {
  variant: Position,
  setPosition: Dispatch<SetStateAction<Position>>;
  onToggleSettings: () => void;
  settingsButtonRef?: React.Ref<HTMLButtonElement>;
  themeName?: string;
}
  & {}) {
  useKeyboardShortcut('m', () => setPosition('main'));
  useKeyboardShortcut('i', () => setPosition('info'));

  const isMenu = variant === 'left' || variant === 'right';

  return (
    <section
      className={cn(navigationVariants({ variant }), className)}
      {...props}
    >
      <div className={cn(
        'flex gap-2',
        isMenu ? 'md:flex-col' : 'absolute bottom-4 left-1/2 -translate-x-1/2',
      )}>
        <Button
          size="icon-lg"
          variant="default"
          type="button"
          className={isMenu ? 'block' : 'hidden'}
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
        {(variant === 'main' || isMenu) && (
          <Button
            ref={settingsButtonRef}
            size={isMenu ? 'icon-lg' : 'icon'}
            type="button"
            className={cn(
              variant === 'main' && 'border-2 border-primary-foreground',
            )}
            onClick={onToggleSettings}
            aria-label="Paramètres"
            aria-keyshortcuts="P"
          >
            <HugeiconsIcon icon={Settings01Icon} className="size-6" aria-hidden="true" />
          </Button>
        )}
        <Button
          size="icon"
          variant="default"
          type="button"
          className={cn(
            'text-xl border-primary-foreground border-2',
            {
              'hidden': variant !== 'main' && variant !== 'info' && variant !== 'settings',
            },
          )}
          onClick={() => {
            if (variant === 'main') {
              setPosition('info');
            } else if (variant === 'settings') {
              onToggleSettings();
            } else {
              setPosition('main');
            }
          }}
          aria-label={variant === 'settings' ? 'Fermer les paramètres' : 'Informations'}
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
      </div>
      {themeName && isMenu && (
        <ThemeIndicator key={themeName} name={themeName} side={variant} />
      )}
    </section>
  );
}
