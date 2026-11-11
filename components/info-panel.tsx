import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Kbd } from '@/components/ui/kbd';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tag01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

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
  const themeIconMask = React.useId();

  return (
    <div className="relative z-50 flex flex-col gap-6 text-primary-foreground">
      <div className="flex flex-col gap-2">
        <h2 className={cn('left text-3xl', bebasNeue.className)}>
          Paramètres
        </h2>
        <div className="flex items-center justify-start gap-4">
          <Button
            id="themes-enabled"
            type="button"
            size="icon-lg"
            className="relative overflow-hidden rounded-full border-2 border-white bg-transparent text-white hover:bg-transparent focus-visible:border-white focus-visible:ring-white/70"
            aria-label="Thèmes"
            aria-pressed={themesEnabled}
            onClick={() => onThemesEnabledChange(!themesEnabled)}
          >
            {themesEnabled ? (
              <svg aria-hidden="true" viewBox="0 0 36 36" className="absolute inset-0 size-full">
                <mask id={themeIconMask}>
                  <rect width="36" height="36" fill="white" />
                  <HugeiconsIcon icon={Tag01Icon} x={6} y={6} color="black" />
                </mask>
                <rect width="36" height="36" fill="white" mask={`url(#${themeIconMask})`} />
              </svg>
            ) : (
              <HugeiconsIcon icon={Tag01Icon} aria-hidden="true" />
            )}
          </Button>
          <Label
            htmlFor="themes-enabled"
            className="cursor-pointer leading-normal"
          >
            Thèmes : {themesEnabled ? 'activé' : 'désactivé'}
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
