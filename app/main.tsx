'use client';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import Navigation from '@/components/navigation';
import DiceButton from '@/components/dice-button';
import MenuContainer from '@/components/menu-container';
import { DisplayMenu } from '@/types/display-menu';
import { MenuResponse } from '@/types/menu-response';
import { toast } from 'sonner';

export type Position = 'main' | 'right' | 'left' | 'info' | 'pending';
export type Transition = 'none' | 'right-to-left' | 'left-to-right';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Main() {

  const [position, setPosition] = React.useState<Position>('main');
  const [transition, setTransition] = React.useState<Transition>('none');
  const [menu, setMenu] = React.useState<DisplayMenu | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
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

  const getMenu = useCallback(async () => {
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
      const res: Response = await fetch(`/generate?seed=${nextSeed}`);
      if (res.status === 429) {
        toast.error('Vous êtes trop gourmand ! veuillez reessayer plus tard');
        setTransition('none');
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
      setTransition('none');
      menuRef?.current?.scrollTo(0, 0);
      setMenu(newMenu.menu);
      updateSeedUrl(nextSeed);
    } catch (error) {
      setTransition('none');
      setPosition('main');
      toast.error('Erreur lors de la generation du menu');
    } finally {
      setIsLoading(false);
    }
  }, [createSeed, isLoading, transition, setMenu, updateSeedUrl]);

  useEffect(() => {
    if (transition !== 'none') {
      getMenu();
    }
  }, [getMenu, transition]);

  return (<>
      <MenuContainer
        ref={menuRef}
        variant={position}
        menu={menu}
      />
      <Navigation
        variant={position}
        setPosition={setPosition}
      />
      <DiceButton
        setTransition={setTransition}
        variant={position}
        isLoading={isLoading}
      />
    </>
  );
}
