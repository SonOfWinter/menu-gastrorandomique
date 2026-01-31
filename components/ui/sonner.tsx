'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  Toaster as Sonner,
  type ToasterProps,
} from 'sonner';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CheckmarkCircle02Icon,
  InformationCircleIcon,
  Alert02Icon,
  MultiplicationSignCircleIcon,
  Loading03Icon,
} from '@hugeicons/core-free-icons';
import { Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';

const manrope = Manrope({
  weight: '500',
  subsets: ['latin'],
  style: ['normal'],
});

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();
  const [position, setPosition] = useState<'top-center' | 'bottom-center'>('bottom-center');

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)'); // tailwind sm

    const update = () => {
      setPosition(media.matches ? 'top-center' : 'bottom-center');
    };

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <Sonner
      position={position}
      theme={theme as ToasterProps['theme']}
      className={cn("toaster group", manrope.className)}
      icons={{
        success: (
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            strokeWidth={2}
            className="size-4"
          />
        ),
        info: (
          <HugeiconsIcon
            icon={InformationCircleIcon}
            strokeWidth={2}
            className="size-4"
          />
        ),
        warning: (
          <HugeiconsIcon
            icon={Alert02Icon}
            strokeWidth={2}
            className="size-4"
          />
        ),
        error: (
          <HugeiconsIcon
            icon={MultiplicationSignCircleIcon}
            strokeWidth={2}
            className="size-4"
          />
        ),
        loading: (
          <HugeiconsIcon
            icon={Loading03Icon}
            strokeWidth={2}
            className="size-4 animate-spin"
          />
        ),
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: 'cn-toast',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
