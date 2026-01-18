import React from 'react';
import {
  cva,
  VariantProps,
} from 'class-variance-authority';
import { cn } from '@/lib/utils';

const glassPapaerVariante = cva(
  'overflow-hidden rounded-0 rounded-0 md:md:rounded-(--glass-radius) pt-(--glass-padding) pr-(--glass-padding) pb-(--glass-padding) pl-(--glass-padding) relative ' +
  'transition-[height,width,position,top] duration-500 ease-in-out z-30',
  {
    variants: {
      variant: {
        default: 'w-full h-full md:h-[70%] md:w-[70%]',
        small: 'h-[150px] w-[150px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
};

export default function GlassPaper({
  children,
  variant = 'default',
  ref,
  ...props
}: Props & VariantProps<typeof glassPapaerVariante>) {

  return (
    <div
      ref={ref}
      data-variant={variant}
      className={cn(glassPapaerVariante({ variant }))}
      {...props}
    >
      <div
        className={cn(
          'backdrop-blur-[3px]  absolute z-0 inset-0',
          {
            'rounded-0 md:rounded-(--glass-radius)': variant === 'default',
            'rounded-(--glass-radius)': variant === 'small',

          },
        )}
        style={{ filter: 'url(#glass-blur);' }}
      ></div>
      <div
        className={cn(
          'shadow-[0_4px_4px_rgba(0,0,0,0.15),0_0_12px_rgba(0,0,0,0.08)] absolute z-10 inset-0;',
          {
            'rounded-0 md:rounded-(--glass-radius)': variant === 'default',
            'rounded-(--glass-radius)': variant === 'small',

          },
        )}
      ></div>
      <div
        className={cn(
          'shadow-[inset_3px_3px_3px_0_rgba(255,255,255,0.45),inset_-3px_-3px_3px_0_rgba(255,255,255,0.45)] absolute z-20 inset-0',
          {
            'rounded-0 md:rounded-(--glass-radius)': variant === 'default',
            'rounded-(--glass-radius)': variant === 'small',

          },
        )}
      ></div>
      {/* Content layer */}
      <div
        className={cn(
          'relative flex flex-col flex-nowrap overflow-auto gap-(--menu-gap) transition-[gap] duration-(--transition) z-40 w-full h-full',
        {
          'flex-nowrap items-center justify-center': variant === 'small',
          'flex-wrap items-center gap-3 pt-4': variant=== 'default',

        },
        )}
      >
        {children}
      </div>
      ;
      <svg
        style={{ display: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter
          id="glass-blur"
          x="0"
          y="0"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.003 0.007"
            numOctaves="1"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>;
    </div>
  )
    ;
}
