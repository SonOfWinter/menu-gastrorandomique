'use client';
import React from 'react';
import Image from 'next/image';
import logo from '@/public/RandomiqueDice.png';
import { Button } from '@/components/ui/button';
import AnimatedDiceIcon from '@/components/animated-dice-icon';
import GlassPaper from '@/components/glass-paper';
import Link from 'next/link';


export default function Landing() {

  return (
    <GlassPaper id="landing">
      <Image
        src={logo}
        alt="Logo"
        width={100}
        height={100}
      />
      <p>Menu Gastrorandomique</p>
      <Link href={"/menu"}>
        <Button
          className="rumble-hover"
          size="lg"
        >
          <AnimatedDiceIcon />
          Générer un menu
        </Button>
      </Link>
      <Button
        className="rumble-hover"
        size="lg"
        variant="outline"
      >
        <AnimatedDiceIcon color="#FFFFFF" />
        Composer mon menu
      </Button>
    </GlassPaper>
  );
}
