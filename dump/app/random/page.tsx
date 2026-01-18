import { Metadata } from 'next';
import { cookies } from 'next/headers';
import MenuPage from '@/ui/menuPage';
import { DisplayMenu } from '@/types/display-menu';
import generateMenu from '@/lib/generate-menu';

export const metadata: Metadata = {
  title: 'Menu Gastrorandomique',
  description: 'Générateur de menus gastronomiques aléatoires',
};

export default async function Home() {
  const mainColor = '#CF9A39';
  const cookieStore = await cookies();
  const inconsistent = cookieStore.get('inconsistent');
  const inconsistentLevel: number = inconsistent ? Number.parseInt(inconsistent.value) : 0;
  const menu: DisplayMenu = generateMenu(3, inconsistentLevel);

  return (
    <MenuPage
      mainColor={mainColor}
      menu={menu}
    />
  );
}
