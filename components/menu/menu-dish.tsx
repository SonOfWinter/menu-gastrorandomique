'use client';
import React from 'react';
import { Dish } from '@/types/dish';
import { Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';
import DiceIcon from '@/components/dice-icon';

const manrope = Manrope({
  weight: '500',
  subsets: ['latin'],
});

export default function MenuDish({ dish }: {
  dish: Dish
}) {
  return (
    <article className={cn(manrope.className, 'flex flex-col gap-2 mb-4')}>
      <h4>
        {dish.main}
      </h4>
      <p className={cn(manrope.className, 'font-normal text-l text-left ')}>
        {dish.second}
      </p>
      {dish.sauce
        ? <p
          className={cn(
            manrope.className,
            'font-normal text-s italic leading-4 text-left text-primary',
          )}
        >
          <DiceIcon color={'currentColor'} className="w-4 h-4 align-middle inline-block mr-2"/>
          <span className="align-middle inline-block">{dish.sauce}</span>
        </p>
        : null
      }
    </article>
  );
}
