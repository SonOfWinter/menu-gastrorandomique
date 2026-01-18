'use client';
import React from 'react';
import { Button } from '@/ui/button';
import { useRouter } from 'next/navigation';
import { Tangerine } from 'next/font/google';
import { cn } from '@/lib/utils';
const tangerine = Tangerine({
  weight: "400",
  subsets: ["latin"]
})

export default function MenuRefreshButton() {
  const router = useRouter();
  return (
    <Button
      className={cn(tangerine.className, "text-l z-10 w-fit")}
      variant="outline"
      size="lg"
      onClick={() => router.refresh()}
    >
      Générer un autre menu
    </Button>
  );
}
