import React from 'react';
import Menu from '@/app/menu/menu';

export default function Page() {
  const date = new Date();
  const seed  = date.getTime();
  return (
    <Menu seed={seed.toString()}/>
  );
}
