import { Montserrat } from 'next/font/google';
import MenuPage from '@/ui/menuPage';
import backgroundImage from '../public/background.avif';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { DisplayMenu } from '@/types/display-menu';
import { cookies } from 'next/headers';
import generateMenu from '@/lib/generate-menu';

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


  const cookieStore = await cookies()

  const inconsistent = cookieStore.get('inconsistent');
  const inconsistentLevel: number = inconsistent ? Number.parseInt(inconsistent.value) : 0;
  const menu: DisplayMenu = generateMenu(3, inconsistentLevel);

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
