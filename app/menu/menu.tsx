'use client';
import React from 'react';
import GlassPaper from '@/components/glass-paper';
import {
  QueryClient,
  useQuery,
} from '@tanstack/react-query';
import DiceIcon from '@/components/dice-icon';
import { Button } from '@/components/ui/button';

export default function Menu({ seed }: { seed: string }) {

  const [actualSeed, setActualSeed] = React.useState<string>(seed);
  const queryClient = new QueryClient();
  const info = useQuery(
    {
      queryKey: [actualSeed],
      queryFn: () => fetch('/generate'),
    },
    queryClient,
  );

  return (
    <GlassPaper variant={info.isPending ? 'small' : 'default'}>
      {info.isPending
        ? <DiceIcon/>
        : <>
          <h1>Menu</h1>
          <h2>Part</h2>
          <p>Plat</p>
          <h2>Part</h2>
          <p>Plat</p>
          <h2>Part</h2>
          <p>Plat</p>
          <Button variant="default" onClick={() => {
            const date = new Date();
            const newSeed  = date.getTime();
            setActualSeed(newSeed.toString());
          }}>
            Reload
          </Button>
        </>
      }
    </GlassPaper>
  );
}
