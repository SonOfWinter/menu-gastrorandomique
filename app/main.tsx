'use client';
import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import type { CSSProperties } from 'react';
import Navigation from '@/components/navigation';
import DiceButton from '@/components/dice-button';
import MenuContainer from '@/components/menu-container';
import { DisplayMenu } from '@/types/display-menu';
import { MenuResponse } from '@/types/menu-response';
import { toast } from 'sonner';
import {
  readThemesEnabled,
  subscribeThemesEnabled,
  writeThemesEnabled,
} from '@/lib/client/theme-preference';
import {
  readInconsistencyEnabled,
  readInconsistencyLevel,
  subscribeInconsistencyPreference,
  writeInconsistencyEnabled,
  writeInconsistencyLevel,
} from '@/lib/client/inconsistency-preference';
import { DEFAULT_THEME_PALETTE } from '@/types/enums/theme';
import type { ThemePalette } from '@/types/data/theme';
import useKeyboardShortcut from '@/lib/client/use-keyboard-shortcut';
import { InconsistentLevelSetting } from '@/types/inconsistent-level';

export type Position = 'main' | 'right' | 'left' | 'info' | 'pending';
export type Transition = 'none' | 'right-to-left' | 'left-to-right';

const NAVIGATION_TRANSITION_DURATION_MS = 500;
const MENU_COLOR_TRANSITION_DURATION_MS = 500;
const MENU_COLOR_TRANSITION_DELAY_MS = Math.max(
  0,
  NAVIGATION_TRANSITION_DURATION_MS - MENU_COLOR_TRANSITION_DURATION_MS,
);

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getThemePaletteStyle(palette: ThemePalette): CSSProperties {
  return {
    '--primary': palette.primary,
    '--accent': palette.primary,
    '--sidebar-primary': palette.primary,
    '--sidebar-accent': palette.primary,
    '--primary-foreground': palette.primaryForeground,
    '--accent-foreground': palette.primaryForeground,
    '--sidebar-primary-foreground': palette.primaryForeground,
    '--sidebar-accent-foreground': palette.primaryForeground,
    '--secondary': palette.secondary,
    '--secondary-foreground': palette.secondaryForeground,
  } as CSSProperties;
}

function applyThemePaletteStyle(style: CSSProperties): () => void {
  const rootStyle = document.documentElement.style;
  const properties = Object.entries(style) as Array<[string, string]>;

  for (const [property, value] of properties) {
    rootStyle.setProperty(property, value);
  }

  return () => {
    for (const [property] of properties) {
      rootStyle.removeProperty(property);
    }
  };
}

export default function Main() {

  const [position, setPosition] = React.useState<Position>('main');
  const [menu, setMenu] = React.useState<DisplayMenu | null>(null);
  const [delayedMenuPalette, setDelayedMenuPalette] = React.useState<ThemePalette>(DEFAULT_THEME_PALETTE);
  const [isLoading, setIsLoading] = React.useState(false);
  const themesEnabled = React.useSyncExternalStore(
    subscribeThemesEnabled,
    readThemesEnabled,
    () => false,
  );
  const inconsistencyEnabled = React.useSyncExternalStore(
    subscribeInconsistencyPreference,
    readInconsistencyEnabled,
    () => false,
  );
  const inconsistencyLevel = React.useSyncExternalStore(
    subscribeInconsistencyPreference,
    readInconsistencyLevel,
    () => 0 as InconsistentLevelSetting,
  );
  const initialSeedRef = useRef<number | null>(null);
  const initialSeedUsedRef = useRef(false);
  const menuRef = useRef<HTMLElement>(null);

  const createSeed = useMemo(
    () => () => Math.floor(Math.random() * 1_000_000_000),
    [],
  );

  const updateSeedUrl = useCallback((nextSeed: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('seed', String(nextSeed));
    window.history.replaceState(null, '', url.toString());
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const seedParam = params.get('seed');
    const parsedSeed = seedParam ? Number.parseInt(seedParam, 10) : NaN;
    if (Number.isFinite(parsedSeed)) {
      initialSeedRef.current = parsedSeed;
    }
  }, []);

  const updateThemesEnabled = useCallback((enabled: boolean) => {
    writeThemesEnabled(enabled);
  }, []);

  const updateInconsistencyEnabled = useCallback((enabled: boolean) => {
    writeInconsistencyEnabled(enabled);
  }, []);

  const updateInconsistencyLevel = useCallback((level: InconsistentLevelSetting) => {
    writeInconsistencyLevel(level);
  }, []);

  const toggleThemesEnabled = useCallback(() => {
    const nextThemesEnabled = !themesEnabled;
    writeThemesEnabled(nextThemesEnabled);
    toast.success(
      nextThemesEnabled
        ? 'Thèmes activés'
        : 'Thèmes désactivés',
    );
  }, [themesEnabled]);

  useKeyboardShortcut('t', toggleThemesEnabled);

  const activePalette = useMemo(() => {
    if (position !== 'left' && position !== 'right') {
      return DEFAULT_THEME_PALETTE;
    }

    return menu?.theme.palette ?? DEFAULT_THEME_PALETTE;
  }, [menu?.theme.palette, position]);

  const themePaletteStyle = useMemo(
    () => getThemePaletteStyle(activePalette),
    [activePalette],
  );

  useEffect(() => applyThemePaletteStyle(themePaletteStyle), [themePaletteStyle]);

  useEffect(() => {
    if (position === 'main' || position === 'info') {
      return;
    }

    if (position === 'pending') {
      return;
    }

    const timeout = window.setTimeout(() => {
      setDelayedMenuPalette(menu?.theme.palette ?? DEFAULT_THEME_PALETTE);
    }, MENU_COLOR_TRANSITION_DELAY_MS);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [menu?.theme.palette, position]);

  const menuPalette = position === 'main' || position === 'info'
    ? DEFAULT_THEME_PALETTE
    : delayedMenuPalette;

  const menuPaletteStyle = useMemo(
    () => getThemePaletteStyle(menuPalette),
    [menuPalette],
  );

  const getMenu = useCallback(async (transition: Transition) => {
    if (transition === 'none') {
      return;
    }
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setPosition('pending');
    // wait end of animation
    await sleep(500);
    const nextSeed = (() => {
      if (!initialSeedUsedRef.current && initialSeedRef.current !== null) {
        initialSeedUsedRef.current = true;
        return initialSeedRef.current;
      }
      return createSeed();
    })();
    try {
      const params = new URLSearchParams({
        seed: String(nextSeed),
      });
      if (themesEnabled) {
        params.set('themes', '1');
      }
      params.set(
        'inconsistentLevel',
        String(inconsistencyEnabled ? inconsistencyLevel : 0),
      );
      const res: Response = await fetch(`/generate?${params.toString()}`);
      if (res.status === 429) {
        toast.error('Vous êtes trop gourmand ! veuillez reessayer plus tard');
        setPosition('main');
        return;
      }
      if (!res.ok) {
        throw new Error('Menu request failed');
      }
      const newMenu: MenuResponse = await res.json();
      if (transition === 'left-to-right') {
        setPosition('right');
      }
      if (transition === 'right-to-left') {
        setPosition('left');
      }
      menuRef?.current?.scrollTo(0, 0);
      setMenu(newMenu.menu);
      updateSeedUrl(nextSeed);
    } catch (error) {
      setPosition('main');
      console.error('Erreur lors de la generation du menu:', error);
      toast.error('Erreur lors de la generation du menu');
    } finally {
      setIsLoading(false);
    }
  }, [createSeed, inconsistencyEnabled, inconsistencyLevel, isLoading, themesEnabled, updateSeedUrl]);

  return (
    <div
      className="theme-palette relative flex items-center justify-center w-full h-full overflow-hidden"
      style={themePaletteStyle}
    >
      <MenuContainer
        ref={menuRef}
        variant={position}
        menu={menu}
        themesEnabled={themesEnabled}
        onThemesEnabledChange={updateThemesEnabled}
        inconsistencyEnabled={inconsistencyEnabled}
        inconsistencyLevel={inconsistencyEnabled ? inconsistencyLevel : 0}
        onInconsistencyEnabledChange={updateInconsistencyEnabled}
        onInconsistencyLevelChange={updateInconsistencyLevel}
        style={menuPaletteStyle}
      />
      <Navigation
        variant={position}
        setPosition={setPosition}
      />
      <DiceButton
        setTransition={getMenu}
        variant={position}
        isLoading={isLoading}
      />
    </div>
  );
}
