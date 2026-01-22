import React, { Ref } from 'react';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';
import { Position } from '@/app/main';
import { cn } from '@/lib/utils';

const menuContainerVariants = cva(
  'absolute top-0 left-0 overflow-y-auto p-15 h-[calc(100vh-60px)] md:h-full block opacity-0 transition-all duration-500 ease-in-out',
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
  text,
  random,
  ref,
  ...props
}: React.ComponentProps<'section'>
  & VariantProps<typeof menuContainerVariants>
  & { variant: Position, text: string, random:string, ref: Ref<HTMLDivElement> }
  & {}) {

  return (
    <section
      ref={ref}
      className={cn(menuContainerVariants({ variant }), className)}
      {...props}
    >
      <div className="flex flex-col justify-center m-auto w-full gap-4 md:w-3/5 lg:3/4">
        Menu
        <p>{random}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </div>
    </section>
  );
}
