import React from 'react';
import { Dish } from '@/types/dish';
import MenuDish from '@/ui/menu-dish';

export default function MenuSection(
  {
    color,
    title,
    dishes,
  }: {
    title: string,
    dishes: Dish[],
    color: string,
  },
) {


  return (
    <section
      className="z-10 justify-center items-center hover:cursor-pointer w-full"
    >
      <h3
        className="block text-s pointer-events-auto"
        style={{ color: color }}
      >
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
