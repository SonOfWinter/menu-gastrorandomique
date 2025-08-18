'use client';
import React from 'react';
import { Tangerine } from 'next/font/google';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Dish } from '@/types/dish';

const tangerine = Tangerine({
  weight: '400',
  subsets: ['latin'],
});
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
    <section
      onClick={copyToClipboard}
      className="z-10 justify-center items-center hover:cursor-pointer w-full"
    >
      <h3
        onClick={copyToClipboard}
        className="block text-s pointer-events-auto"
        style={{ color: color }}
      >
        {title}
      </h3>
      <h4
        className={cn(tangerine.className, 'text-l mt-5 pointer-events-auto')}
        onClick={copyToClipboard}
      >
        {dish.main}
      </h4>
      <p className="font-normal text-s leading-4 text-center opacity-60 mt-2 pointer-events-auto">
        {dish.second}
      </p>
    </section>
  );
};
