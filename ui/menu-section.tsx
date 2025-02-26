import React from 'react';
import { Dish } from '@/types/title';

export default function MenuSection(
  {
    color,
    title,
    dish,
  }: {
    title: string,
    dish: Dish,
    color: string,
  },
) {

  return (
    <section>
      <h3 className="text-s" style={{ color: color }}>{title}</h3>
      <h4 className="text-m mt-5">{dish.main}</h4>
      <p className="font-normal text-s leading-4 text-center opacity-60 mt-2">
        {dish.second}
      </p>
    </section>
  );
};
