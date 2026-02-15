import React from 'react';
import { Dish } from '@/types/dish';
import MenuDish from '@/components/menu/menu-dish';
import { Cormorant } from 'next/font/google';
import { cn } from '@/lib/utils';

const cormorant = Cormorant({
  weight: '400',
  subsets: ['latin'],
});

export default function MenuSection(
  {
    title,
    dishes,
  }: {
    title: string,
    dishes: Dish[],
  },
) {


  return (
    <section className="z-10 flex flex-col gap-4 justify-start items-start w-full">
      <h3 className={cn(cormorant.className, 'block mb-4')}>
        {title}
      </h3>
      {dishes.map((dish, index) =>
        <MenuDish
          key={`${dish.main}-${dish.second}-${dish.sauce ?? ''}-${index}`}
          dish={dish}
        />,
      )}
    </section>
  );
};
