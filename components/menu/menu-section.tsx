import React from 'react';
import { Dish } from '@/types/dish';
import MenuDish from '@/components/menu/menu-dish';
import { Tangerine } from 'next/font/google';
import { cn } from '@/lib/utils';

const tangerine = Tangerine({
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
    <section className="z-10 justify-center items-center w-full">
      <h3 className={cn(tangerine.className, 'block')}>
        {title}
      </h3>
      {dishes.map((dish) =>
        <MenuDish
          key={dish.main + dish.second}
          dish={dish}
        />,
      )}
    </section>
  );
};
