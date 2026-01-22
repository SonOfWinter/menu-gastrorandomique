'use client';
import React, {
  useEffect,
  useRef,
} from 'react';
import Navigation from '@/components/navigation';
import DiceButton from '@/components/dice-button';
import MenuContainer from '@/components/menu-container';
import { MenuDemo } from '@/app/generate/route';

export type Position = 'main' | 'right' | 'left' | 'info' | 'pending';
export type Transition = 'none' | 'right-to-left' | 'left-to-right';

export default function Main() {

  const [position, setPosition] = React.useState<Position>('main');
  const [transition, setTransition] = React.useState<Transition>('none');
  const [menu, setMenu] = React.useState<MenuDemo>({
    text: '', random: ''
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const fetchMenu = async () => {
    setPosition('pending');
    const res: Response = await fetch('/generate');
    const newMenu:MenuDemo = await res.json();
    if (transition === 'left-to-right') {
      setPosition('right');
    }
    if (transition === 'right-to-left') {
      setPosition('left');
    }
    setTransition('none');
    menuRef?.current?.scrollTo(0, 0);
    return newMenu;
  }
  const getMenu = async () => {
      if (transition !== 'none') {
        const menu:MenuDemo = await fetchMenu();
        setMenu(menu);
      }

  }
  useEffect(() => {
    getMenu();
  }, [transition])

  return (<>
    <MenuContainer ref={menuRef} variant={position} text={menu.text} random={menu.random}/>
    <Navigation variant={position} setTransition={setTransition} setPosition={setPosition}/>
    <DiceButton setTransition={setTransition} variant={position} />
  </>
  );
}
