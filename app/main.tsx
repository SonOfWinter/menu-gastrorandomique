'use client';
import React, { useEffect } from 'react';
import Menu from '@/components/menu';

export type Position = 'main' | 'right' | 'left' | 'info' | 'pending';
export type Transition = 'none' | 'right-to-left' | 'left-to-right';

export default function Main() {

  const [position, setPosition] = React.useState<Position>('main');
  const [transition, setTransition] = React.useState<Transition>('none');

  const fetchMenu = async () => {
    setPosition('pending');
    await fetch('/generate');
    if (transition === 'left-to-right') {
      setPosition('right');
    }
    if (transition === 'right-to-left') {
      setPosition('left');
    }
    setTransition('none');
  }

  useEffect(() => {
    if (transition !== 'none') {
      fetchMenu();
    }
  }, [transition])

  return (
    <Menu variant={position} setTransition={setTransition} setPosition={setPosition}/>
  );
}
