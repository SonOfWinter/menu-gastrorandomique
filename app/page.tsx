import { Montserrat } from 'next/font/google';
import {
  DisplayMenu,
  Menu,
} from '@/types/title';
import MenuPage from '@/ui/menuPage';
import backgroundImage from '../public/background.avif';
import {
  generateDisplayMenu,
  getMenuData,
} from '@/lib/menu-generator';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
const montserrat = Montserrat({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Menu Gastrorandomique',
  description: 'Générateur de menus gastronomiques aléatoires',
};
export default async function Home() {
  const mainColor = '#CF9A39';
  const data: Menu = getMenuData();
  const menu: DisplayMenu = generateDisplayMenu(data);

  return (
    <main
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      className={cn(
        montserrat.className,
        'w-screen h-screen relative bg-bottom bg-cover bg-no-repeat overflow-y-auto',
      )}
    >
      <MenuPage
        mainColor={mainColor}
        menu={menu}
      />
    </main>
  );
}
