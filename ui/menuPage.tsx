import React from 'react';
import { DisplayMenu } from '@/types/title';
import Border from '@/ui/border';
import MenuTitle from '@/ui/menu-title';
import MenuSection from '@/ui/menu-section';

export default function MenuPage({ mainColor, menu }: { mainColor: string, menu: DisplayMenu }) {

  return (
    <article
      className="block relative min-h-full h-auto w-full overflow-hidden bg-white m-0 md:my-[10vh] mx-auto md:w-auto md:min-h-0 md:h-[80vh] md:aspect-[210/297]"
    >
      <Border color={mainColor} />
      <div className="flex flex-col gap-[60px] h-full my-20 mx-16">
        <div className="flex flex-col flex-nowrap gap-4">
          <MenuTitle
            color={mainColor}
            menuName={menu.title}
            complementName={menu.complement}
            price={menu.price}
          />
        </div>
        <div className="flex flex-col gap-12">
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
        </div>
      </div>
    </article>
  );
}
