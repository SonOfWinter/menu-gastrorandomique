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
import themes from '@/data/menu-theme';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type Position = 'main' | 'right' | 'left' | 'info' | 'pending';
export type Transition = 'none' | 'right-to-left' | 'left-to-right';

const noThemeValue = 'aucun';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Main() {

  const [position, setPosition] = React.useState<Position>('main');
  const [menu, setMenu] = React.useState<DisplayMenu | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [themeId, setThemeId] = React.useState<string>(() => {
    if (typeof window === 'undefined') {
      return noThemeValue;
    }

    const themeParam = new URLSearchParams(window.location.search).get('theme');
    return themeParam && themes.some((theme) => theme.id === themeParam)
      ? themeParam
      : noThemeValue;
  });
  const initialSeedRef = useRef<number | null>(null);
  const initialSeedUsedRef = useRef(false);
  const menuRef = useRef<HTMLElement>(null);

  const createSeed = useMemo(
    () => () => Math.floor(Math.random() * 1_000_000_000),
    [],
  );

  const updateSeedUrl = useCallback((nextSeed: number, nextThemeId: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('seed', String(nextSeed));
    if (nextThemeId === noThemeValue) {
      url.searchParams.delete('theme');
    } else {
      url.searchParams.set('theme', nextThemeId);
    }
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
      const params = new URLSearchParams({ seed: String(nextSeed) });
      if (themeId !== noThemeValue) {
        params.set('theme', themeId);
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
      updateSeedUrl(nextSeed, themeId);
    } catch (error) {
      setPosition('main');
      console.error('Erreur lors de la generation du menu:', error);
      toast.error('Erreur lors de la generation du menu');
    } finally {
      setIsLoading(false);
    }
  }, [createSeed, isLoading, themeId, updateSeedUrl]);

  return (<>
      <MenuContainer
        ref={menuRef}
        variant={position}
        menu={menu}
      />
      <div className="fixed top-4 left-4 z-50">
        <Select
          value={themeId}
          onValueChange={setThemeId}
          disabled={isLoading}
        >
          <SelectTrigger aria-label="Thème du menu">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={noThemeValue}>Sans thème</SelectItem>
            {themes.map((theme) => (
              <SelectItem key={theme.id} value={theme.id}>
                {theme.nom}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
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
