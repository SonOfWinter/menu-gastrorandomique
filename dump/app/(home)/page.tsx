import { Metadata } from 'next';
import { Button } from '@/ui/button';
import backgroundImage from '@/public/background.avif';

export const metadata: Metadata = {
  title: 'Menu Gastrorandomique - Accueil',
  description: 'Générateur de menus gastronomiques aléatoires',
};

export default async function Page() {

  return (
    <div
      className="block relative m-auto h-[75%] w-[75%]"
    >
      <Button
        type="button"
        className="
          inline-flex items-center justify-center align-middle select-none
          font-sans text-center text-white text-sm font-medium
          px-4 py-2
          rounded-full border border-white/50
          bg-white/2.5 backdrop-blur-sm
          shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
          hover:bg-white/30
          duration-300
          before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60
          before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none
          after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30
          after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none
          transition antialiased"
      >
        Test
      </Button>
    </div>
  );
}

