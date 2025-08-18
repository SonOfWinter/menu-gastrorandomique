import React from 'react';
import Border from '@/ui/border';
import MenuTitle from '@/ui/menu-title';
import MenuSection from '@/ui/menu-section';
import MenuRefreshButton from '@/ui/menu-refresh-button';
import { DisplayMenu } from '@/types/display-menu';

export default function MenuPage({ mainColor, menu }: { mainColor: string, menu: DisplayMenu }) {

  return (
    <article
      className="block relative min-h-full md:min-h-0 h-auto max-w-full w-full overflow-hidden bg-white m-0 md:my-[10vh] mx-auto md:w-[21cm]"
    >
      <Border color={mainColor} />
      <div className="flex flex-col z-10 gap-[60px] h-full my-20 mx-16">
        <div className="flex flex-col flex-nowrap gap-4">
          <MenuTitle
            color={mainColor}
            menuName={menu.title}
            complementName={menu.complement}
            price={menu.price}
          />
        </div>
        <div className="flex flex-col gap-12 items-center">
          <MenuSection
            color={mainColor}
            title="Entrée"
            dish={menu.entree}
          />

          <MenuSection
            color={mainColor}
            title="Plat"
            dish={menu.plat}
          />

          <MenuSection
            color={mainColor}
            title="Dessert"
            dish={menu.dessert}
          />
          <MenuRefreshButton/>
        </div>
      </div>
    </article>
  );
}
