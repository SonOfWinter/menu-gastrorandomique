import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Kbd } from '@/components/ui/kbd';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const shortcuts = [
  { key: 'R', description: 'Nouveau menu' },
  { key: 'M', description: 'Revenir au menu principal' },
  { key: 'I', description: 'Voir la page informations' },
];

export default function InfoPanel() {
  return (
    <div className="relative z-50 flex flex-col gap-6 text-primary-foreground">
      <p>
        {'Code source : '}
        <a
          className="underline underline-offset-4"
          href="https://github.com/SonOfWinter/menu-gastrorandomique"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <div className="flex flex-col gap-2">
        <h2 className={cn('left text-3xl', bebasNeue.className)}>
          Raccourcis clavier
        </h2>
        <ul className="space-y-1">
          {shortcuts.map((shortcut) => (
            <li
              key={shortcut.key}
              className="flex items-center gap-2"
            >
              <Kbd>{shortcut.key}</Kbd>
              <span>{shortcut.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
