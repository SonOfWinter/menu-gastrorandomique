'use client';
import React from 'react';
import { toast } from 'sonner';
import { Dish } from '@/types/dish';
import { Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';
import DiceIcon from '@/components/dice-icon';
import { copyText } from '@/lib/client/copy-text';

const manrope = Manrope({
  weight: '500',
  subsets: ['latin'],
  style: ['normal'],
});

export default function MenuDish({ dish }: {
  dish: Dish
}) {

  const copyToClipboard = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    copyText(dish.main + ' ' + dish.second + (dish.sauce ? ' ' + dish.sauce : ''))
      .then(() => {
        toast.success('Texte copié dans le presse-papiers');
      }).catch(() => {
      toast.error('Erreur lors de la copie du texte');
    });
  };

  return (
    <article
      className={cn(manrope.className, 'flex flex-col gap-1 mb-4 cursor-copy')}
      onClick={copyToClipboard}
    >
      <h4>
        {dish.main}
      </h4>
      <p className={cn(manrope.className, 'font-normal text-l text-left leading-7')}>
        {dish.second}
      </p>
      {dish.sauce
        ? <div className="flex items-center gap-2 text-primary ">
          <DiceIcon
            color={'currentColor'}
            className="shrink-0 w-4 h-4"
          />
          <p
            className={cn(
              manrope.className,
              'font-normal text-s leading-7 text-left',
            )}
          >
            {dish.sauce}
          </p>
        </div>
        : null
      }
    </article>
  );
}
