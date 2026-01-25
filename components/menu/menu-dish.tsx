'use client';
import React from 'react';
import { Dish } from '@/types/dish';

export default function MenuDish({ dish }: {
  dish: Dish
}) {
  return (
    <article className="flex flex-col gap-2 mb-4">
      <h4>
        {dish.main}
      </h4>
      <p className="font-normal text-l text-left ">
        {dish.second}
      </p>
      {dish.sauce
        ? <p className="font-normal text-s italic leading-4 text-left text-secondary">
          {dish.sauce}
        </p>
        : null
      }
    </article>
  );
}
