import Main from '@/app/main';
import { Metadata } from 'next';
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: 'Menu Gastrorandomique',
  description: 'Générateur de menus gastronomiques aléatoires',
};

export default function Page() {
  return (
    <>
      <Main />
      <Toaster />
    </>
  );
}
