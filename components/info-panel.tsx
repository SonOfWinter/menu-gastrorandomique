import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Kbd } from '@/components/ui/kbd';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { InconsistentLevelSetting } from '@/types/inconsistent-level';
import { isInconsistentLevelSetting } from '@/lib/client/inconsistency-preference';

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
  inconsistencyEnabled,
  inconsistencyLevel,
  onInconsistencyEnabledChange,
  onInconsistencyLevelChange,
}: {
  themesEnabled: boolean;
  onThemesEnabledChange: (enabled: boolean) => void;
  inconsistencyEnabled: boolean;
  inconsistencyLevel: InconsistentLevelSetting;
  onInconsistencyEnabledChange: (enabled: boolean) => void;
  onInconsistencyLevelChange: (level: InconsistentLevelSetting) => void;
}) {
  const displayedInconsistencyLevel = inconsistencyEnabled ? inconsistencyLevel : 0;
  const inconsistencyLabel = displayedInconsistencyLevel === -1
    ? 'Aléatoire'
    : String(displayedInconsistencyLevel);
  const shouldSpinInconsistencyThumb = displayedInconsistencyLevel === -1;
  const inconsistencyThumbShakeLevel = Math.max(
    0,
    displayedInconsistencyLevel - 16,
  ) as 0 | 1 | 2 | 3 | 4;

  return (
    <div className="relative z-50 flex flex-col gap-6 pb-20 text-primary-foreground">
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
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-4">
            <Switch
              id="inconsistency-enabled"
              checked={inconsistencyEnabled}
              onCheckedChange={onInconsistencyEnabledChange}
              aria-label="Activer l'inconsistance"
            />
            <Label
              htmlFor="inconsistency-enabled"
              className="flex flex-col items-start gap-1 leading-normal"
            >
              <span>Activer l&apos;inconsistance</span>
            </Label>
          </div>
          <div className="flex flex-col gap-2 pl-15">
            <div className="flex items-center justify-between gap-4">
              <Label htmlFor="inconsistency-level">
                Niveau d&apos;inconsistance
              </Label>
              <span
                className="min-w-18 text-right"
                aria-live="polite"
              >
                {inconsistencyLabel}
              </span>
            </div>
            <Slider
              id="inconsistency-level"
              min={-1}
              max={20}
              step={1}
              value={[displayedInconsistencyLevel]}
              disabled={!inconsistencyEnabled}
              spinThumb={shouldSpinInconsistencyThumb}
              shakeThumbLevel={inconsistencyThumbShakeLevel}
              onValueChange={(value) => {
                const nextValue = Array.isArray(value) ? value[0] : value;
                if (isInconsistentLevelSetting(nextValue)) {
                  onInconsistencyLevelChange(nextValue);
                }
              }}
              aria-label="Niveau d'inconsistance"
            />
          </div>
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
