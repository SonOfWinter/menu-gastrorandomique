'use client';
import React, {
  useCallback,
  useEffect,
  useRef,
} from 'react';
import Navigation from '@/components/navigation';
import DiceButton from '@/components/dice-button';
import MenuContainer from '@/components/menu-container';
import { MenuResponse } from '@/app/generate/route';
import { DisplayMenu } from '@/types/display-menu';

export type Position = 'main' | 'right' | 'left' | 'info' | 'pending';
export type Transition = 'none' | 'right-to-left' | 'left-to-right';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Main() {

  const [position, setPosition] = React.useState<Position>('main');
  const [transition, setTransition] = React.useState<Transition>('none');
  const [menu, setMenu] = React.useState<DisplayMenu | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const getMenu = useCallback(async () => {
    setPosition('pending');
    // wait end of animation
    await sleep(500);
    const res: Response = await fetch('/generate');
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
  }, [transition, setMenu]);

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
      />
    </>
  );
}
