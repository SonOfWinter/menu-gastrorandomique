import React from 'react';
import { Cormorant, Manrope } from 'next/font/google';
import { DisplayMenu } from '@/types/display-menu';
import { cn } from '@/lib/utils';

const cormorant = Cormorant({
  weight: '400',
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: '500',
  subsets: ['latin'],
});

export default function MenuTitle({
  menu,
}: {
  menu: DisplayMenu,
}) {

  return (
    <div className="flex flex-col gap-2 mb-4">
      <h1 className={cormorant.className}>
        {menu.title}
      </h1>
      <h2 className={cn("text-base", manrope.className)}>
        {menu.complement}
      </h2>
      <p className={cn("font-normal text-lg leading-3 text-center text-secondary", manrope.className)}>
        {`${menu.price}€`}
      </p>
    </div>
  );
}
;
