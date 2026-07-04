import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Kbd } from '@/components/ui/kbd';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const shortcuts = [
  { key: 'R', description: 'Nouveau menu' },
  { key: 'M', description: 'Revenir au menu principal' },
  { key: 'I', description: 'Voir la page informations' },
  { key: 'T', description: 'Activer ou désactiver les thèmes' },
];

export default function InfoPanel({
  themesEnabled,
  onThemesEnabledChange,
}: {
  themesEnabled: boolean;
  onThemesEnabledChange: (enabled: boolean) => void;
}) {
  return (
    <div className="relative z-50 flex flex-col gap-6 text-primary-foreground">
      <div className="flex flex-col gap-2">
        <h2 className={cn('left text-3xl', bebasNeue.className)}>
          Paramètres
        </h2>
        <div className="flex items-center justify-start gap-4">
          <Switch
            id="themes-enabled"
            checked={themesEnabled}
            onCheckedChange={onThemesEnabledChange}
            aria-label="Activer les thèmes"
          />
          <Label
            htmlFor="themes-enabled"
            className="flex flex-col items-start gap-1 leading-normal"
          >
            <span>Activer les thèmes</span>
          </Label>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
        <h2 className={cn('left text-3xl', bebasNeue.className)}>
          Code source
        </h2>
        <p>
          <a
            className="underline underline-offset-4"
            href="https://github.com/SonOfWinter/menu-gastrorandomique"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
