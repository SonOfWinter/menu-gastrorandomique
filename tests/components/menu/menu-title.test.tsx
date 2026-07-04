import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MenuTitle from '@/components/menu/menu-title';
import { DEFAULT_THEME_PALETTE } from '@/types/enums/theme';

vi.mock('next/font/google', () => ({
  Bebas_Neue: () => ({ className: 'font-bebas' }),
  Manrope: () => ({ className: 'font-manrope' }),
}));

describe('components/menu/menu-title.tsx', () => {
  it('renders menu title, complement, and price', () => {
    render(
      <MenuTitle
        menu={{
          title: 'Menu Test',
          complement: 'du chef',
          price: 42,
          theme: {
            nom: 'Médiéval',
            palette: DEFAULT_THEME_PALETTE,
          },
          entree: [],
          plat: [],
          dessert: [],
        }}
      />,
    );

    expect(screen.getByText('Menu Test')).toBeInTheDocument();
    expect(screen.getByText('du chef')).toBeInTheDocument();
    expect(screen.getByText('42€')).toBeInTheDocument();
    expect(screen.queryByText('Thème : Médiéval')).not.toBeInTheDocument();
  });
});
