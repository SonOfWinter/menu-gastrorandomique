import Main from '@/app/main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu Gastrorandomique',
  description: 'Générateur de menus gastronomiques aléatoires',
};

export default function Page() {
  return (
    <Main />
  );
}
