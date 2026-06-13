'use client';
import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react';
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

export type Position = 'main' | 'right' | 'left' | 'info' | 'pending';
export type Transition = 'none' | 'right-to-left' | 'left-to-right';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Main() {

  const [position, setPosition] = React.useState<Position>('main');
  const [menu, setMenu] = React.useState<DisplayMenu | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const themesEnabled = React.useSyncExternalStore(
    subscribeThemesEnabled,
    readThemesEnabled,
    () => false,
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
  }, [createSeed, isLoading, themesEnabled, updateSeedUrl]);

  return (<>
      <MenuContainer
        ref={menuRef}
        variant={position}
        menu={menu}
        themesEnabled={themesEnabled}
        onThemesEnabledChange={updateThemesEnabled}
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
    </>
  );
}
