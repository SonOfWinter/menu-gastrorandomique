'use client';
import React from 'react';
import { toast } from 'sonner';
import { Dish } from '@/types/dish';
import { cn } from '@/lib/utils';
import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({
  weight: '400',
  subsets: ['latin'],
});
export default function MenuDish({ dish }: {
  dish: Dish
}) {
  const copyToClipboard = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    navigator.clipboard.writeText(dish.main + ' ' + dish.second)
      .then(() => {
        toast('Texte copié dans le presse-papiers');
      }).catch(() => {
      toast('Erreur lors de la copie du texte');
    });
  };
  return (
    <article onClick={copyToClipboard}>
      <h4
        className={cn(tangerine.className, 'text-l mt-5 pointer-events-auto')}
      >
        {dish.main}
      </h4>
      <p className="font-normal text-s leading-4 text-center opacity-60 mt-2 pointer-events-auto">
        {dish.second}
      </p>
      {dish.sauce ?
        <p className="font-normal text-s italic leading-4 text-center opacity-40 mt-2 pointer-events-auto">
          {dish.sauce}
        </p>
        : null
      }
    </article>
  );
}
