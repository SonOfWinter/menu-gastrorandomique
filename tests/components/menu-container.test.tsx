import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MenuContainer from '@/components/menu-container';

vi.mock('@/components/menu/menu-title', () => ({
  default: ({ menu }: { menu: { title: string } }) => (
    <div data-testid="menu-title">{menu.title}</div>
  ),
}));

vi.mock('@/components/menu/menu-section', () => ({
  default: ({ title }: { title: string }) => (
    <div data-testid={`menu-section-${title}`}>{title}</div>
  ),
}));

describe('components/menu-container.tsx', () => {
  it('renders nothing when menu is null', () => {
    render(
      <MenuContainer
        variant="main"
        menu={null}
      />,
    );

    expect(screen.queryByTestId('menu-title')).toBeNull();
    expect(screen.queryByTestId('menu-section-Entrée')).toBeNull();
  });

  it('renders menu title and sections when menu is provided', () => {
    render(
      <MenuContainer
        variant="right"
        menu={{
          title: 'Menu Test',
          complement: 'du chef',
          price: 42,
          entree: [],
          plat: [],
          dessert: [],
        }}
      />,
    );

    expect(screen.getByTestId('menu-title')).toHaveTextContent('Menu Test');
    expect(screen.getByTestId('menu-section-Entrée')).toBeInTheDocument();
    expect(screen.getByTestId('menu-section-Plat')).toBeInTheDocument();
    expect(screen.getByTestId('menu-section-Dessert')).toBeInTheDocument();
  });
});
