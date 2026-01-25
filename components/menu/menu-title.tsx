import React from 'react';
import { Tangerine } from 'next/font/google';
import { DisplayMenu } from '@/types/display-menu';

const tangerine = Tangerine({
  weight: '400',
  subsets: ['latin'],
});

export default function MenuTitle({
  menu,
}: {
  menu: DisplayMenu,
}) {

  return (
    <div className="flex flex-col gap-2 mb-4">
      <h1 className={tangerine.className}>
        {menu.title}
      </h1>
      <h2 className="text-sm">{menu.complement}</h2>
      <p className="font-normal text-s leading-3 text-center text-secondary">
        {`${menu.price}€`}
      </p>
    </div>
  );
}
;
