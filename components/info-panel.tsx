import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Kbd } from '@/components/ui/kbd';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { BlenderIcon, Tag01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  MAX_INCONSISTENT_LEVEL,
  MIN_INCONSISTENT_LEVEL,
  parseInconsistentLevel,
  type InconsistentLevel,
} from '@/types/inconsistent-level';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const SETTINGS_CONTROL_SIZE = '2.5rem';
const SETTINGS_ICON_SIZE = 24;

const shortcuts = [
  { key: 'R', description: 'Nouveau menu' },
  { key: 'M', description: 'Revenir au menu principal' },
  { key: 'I', description: 'Voir la page informations' },
  { key: 'T', description: 'Activer ou désactiver les thèmes' },
];

export default function InfoPanel({
  themesEnabled,
  onThemesEnabledChange,
  inconsistentLevel,
  onInconsistentLevelChange,
}: {
  themesEnabled: boolean;
  onThemesEnabledChange: (enabled: boolean) => void;
  inconsistentLevel: InconsistentLevel;
  onInconsistentLevelChange: (level: InconsistentLevel) => void;
}) {
  const themeIconMask = React.useId();
  const levelId = React.useId();
  const levelHintId = React.useId();
  const isLevelZero = inconsistentLevel === MIN_INCONSISTENT_LEVEL;
  const levelPosition = `${inconsistentLevel / MAX_INCONSISTENT_LEVEL * 100}%`;

  return (
    <div className="relative z-50 flex flex-col gap-6 text-primary-foreground">
      <div
        className="flex flex-col gap-2"
        style={{ '--settings-control-size': SETTINGS_CONTROL_SIZE } as React.CSSProperties}
      >
        <h2 className={cn('left text-3xl', bebasNeue.className)}>
          Paramètres
        </h2>
        <div className="flex items-center justify-start gap-4">
          <Button
            id="themes-enabled"
            type="button"
            size="icon-lg"
            className="relative size-(--settings-control-size) overflow-hidden rounded-full border-2 border-white bg-transparent text-white hover:bg-transparent focus-visible:border-white focus-visible:ring-white/70"
            aria-label="Thèmes"
            aria-pressed={themesEnabled}
            onClick={() => onThemesEnabledChange(!themesEnabled)}
          >
            {themesEnabled ? (
              <svg aria-hidden="true" viewBox="0 0 36 36" className="absolute inset-0 size-full">
                <mask id={themeIconMask}>
                  <rect width="36" height="36" fill="white" />
                  <HugeiconsIcon icon={Tag01Icon} size={SETTINGS_ICON_SIZE} x={6} y={6} color="black" />
                </mask>
                <rect width="36" height="36" fill="white" mask={`url(#${themeIconMask})`} />
              </svg>
            ) : (
              <HugeiconsIcon icon={Tag01Icon} size={SETTINGS_ICON_SIZE} aria-hidden="true" />
            )}
          </Button>
          <Label
            htmlFor="themes-enabled"
            className="cursor-pointer leading-normal"
          >
            Thèmes : {themesEnabled ? 'activé' : 'désactivé'}
          </Label>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor={levelId}>Niveau d’absurdité</Label>
            <p id={levelHintId} className="text-xs leading-relaxed text-primary-foreground/75">
              Plus le niveau est élevé, plus le tirage peut ignorer certaines règles de compatibilité.
            </p>
          </div>
          <div className="group/level relative h-(--settings-control-size)">
            <input
              type="range"
              min={MIN_INCONSISTENT_LEVEL}
              max={MAX_INCONSISTENT_LEVEL}
              step={1}
              value={inconsistentLevel}
              id={levelId}
              aria-describedby={levelHintId}
              onChange={(event) => {
                const level = parseInconsistentLevel(event.currentTarget.value);
                if (level !== undefined) {
                  onInconsistentLevelChange(level);
                }
              }}
              className="peer absolute inset-0 z-10 m-0 h-full w-full cursor-pointer appearance-none opacity-0 [&::-webkit-slider-thumb]:size-(--settings-control-size) [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:size-(--settings-control-size) [&::-moz-range-thumb]:border-0"
            />
            <div
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute inset-x-[calc(var(--settings-control-size)/2)] top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/40',
                isLevelZero && 'ml-[calc(var(--settings-control-size)/2)]',
              )}
            >
              <div className="h-full rounded-full bg-white" style={{ width: levelPosition }} />
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-[calc(var(--settings-control-size)/2)] top-1/2 peer-focus-visible:[&>span]:outline-2 peer-focus-visible:[&>span]:outline-offset-2 peer-focus-visible:[&>span]:outline-white">
              <span
                className={cn(
                  'absolute flex size-(--settings-control-size) -translate-1/2 items-center justify-center rounded-full',
                  isLevelZero ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-primary',
                )}
                style={{ left: levelPosition }}
              >
                <HugeiconsIcon icon={BlenderIcon} size={SETTINGS_ICON_SIZE} />
                <span className="invisible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium tabular-nums text-primary shadow-sm group-hover/level:visible group-active/level:visible group-has-[:focus-visible]/level:visible">
                  {inconsistentLevel} / {MAX_INCONSISTENT_LEVEL}
                </span>
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-4 text-sm">
            <span>Plutôt crédible</span>
            <span className="text-right">Complètement incohérent</span>
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
