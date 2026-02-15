import React from 'react';
import { Cormorant } from 'next/font/google';
import { cn } from '@/lib/utils';

const cormorant = Cormorant({
  weight: '400',
  subsets: ['latin'],
});

const shortcuts = [
  { key: 'R', description: 'Nouveau menu' },
  { key: 'M', description: 'Revenir au menu principal' },
];

export default function InfoPanel() {
  return (
    <div className="relative z-50 flex flex-col gap-6 text-primary-foreground">
      <h1 className={cn(cormorant.className, 'text-2xl')}>Informations</h1>
      <a
        className="underline underline-offset-4"
        href="https://github.com/SonOfWinter/menu-gastrorandomique"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg">Raccourcis clavier</h2>
        <ul className="space-y-1">
          {shortcuts.map((shortcut) => (
            <li key={shortcut.key} className="flex items-center gap-2">
              <span className="inline-flex min-w-8 justify-center rounded-full border border-secondary px-2 py-0.5 text-sm">
                {shortcut.key}
              </span>
              <span>{shortcut.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
