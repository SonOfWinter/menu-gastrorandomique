'use client';
import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useLayoutEffect,
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
import { DEFAULT_THEME_PALETTE } from '@/types/enums/theme';
import type { ThemePalette } from '@/types/data/theme';
import useKeyboardShortcut from '@/lib/client/use-keyboard-shortcut';
import {
  readInconsistentLevel,
  subscribeInconsistentLevel,
  writeInconsistentLevel,
} from '@/lib/client/inconsistent-level-preference';
import {
  MIN_INCONSISTENT_LEVEL,
  parseInconsistentLevel,
  type InconsistentLevel,
} from '@/types/inconsistent-level';

type SharedMenuSettings = {
  seed: number;
  inconsistentLevel: InconsistentLevel;
  themesEnabled?: boolean;
};

export type Position = 'main' | 'right' | 'left' | 'info' | 'settings' | 'pending';
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
  const inconsistentLevel = React.useSyncExternalStore<InconsistentLevel>(
    subscribeInconsistentLevel,
    readInconsistentLevel,
    () => MIN_INCONSISTENT_LEVEL,
  );
  const sharedMenuRef = useRef<SharedMenuSettings | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const settingsButtonRef = useRef<HTMLButtonElement>(null);
  const settingsOrigin = useRef<{ position: Position; scrollTop: number } | null>(null);
  const settingsReturn = useRef<{ scrollTop: number } | null>(null);

  const toggleSettings = useCallback(() => {
    if (isLoading || position === 'pending') return;

    if (position === 'settings') {
      const origin = settingsOrigin.current;
      if (origin) {
        settingsReturn.current = { scrollTop: origin.scrollTop };
        setPosition(origin.position);
      }
      return;
    }

    settingsOrigin.current = { position, scrollTop: menuRef.current?.scrollTop ?? 0 };
    setPosition('settings');
  }, [isLoading, position]);

  useKeyboardShortcut('p', toggleSettings, {
    enabled: !isLoading && position !== 'pending' && position !== 'settings',
  });

  useLayoutEffect(() => {
    const container = menuRef.current;
    if (!container) return;

    if (position === 'settings') {
      container.scrollTop = 0;
      container.querySelector('h1')?.focus({ preventScroll: true });
    } else if (settingsReturn.current) {
      container.scrollTop = settingsReturn.current.scrollTop;
      settingsReturn.current = null;
      const focusTarget = settingsButtonRef.current ?? container.querySelector('h1');
      focusTarget?.focus({ preventScroll: true });
    }
  }, [position]);

  const createSeed = useMemo(
    () => () => Math.floor(Math.random() * 1_000_000_000),
    [],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const seedParam = params.get('seed');
    const parsedSeed = seedParam ? Number.parseInt(seedParam, 10) : NaN;
    if (Number.isFinite(parsedSeed)) {
      const themes = params.get('themes');
      sharedMenuRef.current = {
        seed: parsedSeed,
        inconsistentLevel: parseInconsistentLevel(params.get('inconsistentLevel')) ?? MIN_INCONSISTENT_LEVEL,
        themesEnabled: themes === '1' ? true : themes === '0' ? false : undefined,
      };
    }
  }, []);

  const updateThemesEnabled = useCallback((enabled: boolean) => {
    writeThemesEnabled(enabled);
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
    if (position !== 'left' && position !== 'right') {
      return;
    }

    const timeout = window.setTimeout(() => {
      setDelayedMenuPalette(menu?.theme.palette ?? DEFAULT_THEME_PALETTE);
    }, MENU_COLOR_TRANSITION_DELAY_MS);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [menu?.theme.palette, position]);

  const menuPalette = position === 'left' || position === 'right' || position === 'pending'
    ? delayedMenuPalette
    : DEFAULT_THEME_PALETTE;

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
    const sharedMenu = sharedMenuRef.current;
    const params = new URLSearchParams({
      seed: String(sharedMenu?.seed ?? createSeed()),
      inconsistentLevel: String(sharedMenu?.inconsistentLevel ?? inconsistentLevel),
      themes: (sharedMenu?.themesEnabled ?? themesEnabled) ? '1' : '0',
    });
    // Wait for the dice animation.
    await sleep(500);
    try {
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
      const url = new URL(window.location.href);
      for (const [key, value] of params) {
        url.searchParams.set(key, value);
      }
      window.history.replaceState(null, '', url.toString());
      sharedMenuRef.current = null;
    } catch (error) {
      setPosition('main');
      console.error('Erreur lors de la generation du menu:', error);
      toast.error('Erreur lors de la generation du menu');
    } finally {
      setIsLoading(false);
    }
  }, [createSeed, inconsistentLevel, isLoading, themesEnabled]);

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
        inconsistentLevel={inconsistentLevel}
        onInconsistentLevelChange={writeInconsistentLevel}
        style={menuPaletteStyle}
      />
      <Navigation
        variant={position}
        setPosition={setPosition}
        onToggleSettings={toggleSettings}
        settingsButtonRef={settingsButtonRef}
        themeName={menu?.theme.nom === 'Sans thème' ? undefined : menu?.theme.nom}
      />
      <DiceButton
        setTransition={getMenu}
        variant={position}
        isLoading={isLoading}
      />
    </div>
  );
}
