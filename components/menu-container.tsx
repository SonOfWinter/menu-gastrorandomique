import React from 'react';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';
import { Position } from '@/app/main';
import { cn } from '@/lib/utils';
import { DisplayMenu } from '@/types/display-menu';
import MenuTitle from '@/components/menu/menu-title';
import MenuSection from '@/components/menu/menu-section';
import InfoPanel from '@/components/info-panel';
import { Cormorant } from 'next/font/google';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { copyText } from '@/lib/client/copy-text';

const menuContainerVariants = cva(
  'absolute top-0 left-0 overflow-y-auto w-full py-15 px-4 md:p-15 h-[calc(100dvh-60px)] md:h-full block opacity-0 transition-all duration-500 ease-in-out',
  {
    variants: {
      variant: {
        'main': 'opacity-100',
        'info': 'opacity-100',
        'right': 'opacity-100',
        'left': 'opacity-100',
        'pending': '',
      },
    },
    defaultVariants: {
      variant: 'main',
    },
  },
);

const cormorant = Cormorant({
  weight: '400',
  subsets: ['latin'],
});

const MenuContainer = React.forwardRef<HTMLElement, React.ComponentProps<'section'>
  & VariantProps<typeof menuContainerVariants>
  & { variant: Position, menu: DisplayMenu | null }
  & {}>(function MenuContainer({
  className,
  variant = 'main',
  menu,
  ...props
}, ref) {
  const copyShareUrl = () => {
    if (typeof window === 'undefined') {
      return;
    }
    copyText(window.location.href)
      .then(() => {
        toast.success('Lien copié dans le presse-papiers');
      })
      .catch(() => {
        toast.error('Erreur lors de la copie du lien');
      });
  };

  return (
    <section
      ref={ref}
      className={cn(menuContainerVariants({ variant }), className)}
      {...props}
    >
      <div className="flex flex-col justify-start m-auto w-full md:max-w-[50%] gap-4 md:w-3/5 lg:w-3/4">
        {variant === 'main'
          ? (
            <h1
              className={cn(
                cormorant.className,
                'relative z-50 text-[4rem] leading-16 text-primary-foreground text-center',
              )}
            >
              Menu<br/>Gastrorandomique
            </h1>
          )
          : null}
        {variant === 'info'
          ? <InfoPanel />
          : null}
        {menu !== null && variant !== 'info'
          ? <>
            <div className="flex flex-col flex-nowrap gap-4">
              <MenuTitle menu={menu} />
            </div>
            <div className="flex flex-col gap-12 items-center">
              <MenuSection
                title="Entrée"
                dishes={menu.entree}
              />

              <MenuSection
                title="Plat"
                dishes={menu.plat}
              />

              <MenuSection
                title="Dessert"
                dishes={menu.dessert}
              />
            </div>
            <div className="flex justify-center pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={copyShareUrl}
                size="lg"
              >
                Partager
              </Button>
            </div>
          </>
          : null}
      </div>
    </section>
  );
});

MenuContainer.displayName = 'MenuContainer';

export default MenuContainer;
