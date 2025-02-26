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

export default async function Home() {
  const mainColor = '#CF9A39';
  const data: Menu = getMenuData();
  const menu: DisplayMenu = generateDisplayMenu(data);

  return (
    <main
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      className="w-screen h-screen relative bg-bottom bg-cover bg-no-repeat overflow-y-auto"
    >
      <MenuPage
        mainColor={mainColor}
        menu={menu}
      />
    </main>
  );
}
