import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MenuSection from '@/components/menu/menu-section';

vi.mock('next/font/google', () => ({
  Cormorant: () => ({ className: 'font-cormorant' }),
}));

vi.mock('@/components/menu/menu-dish', () => ({
  default: ({ dish }: { dish: { main: string } }) => (
    <div data-testid="menu-dish">{dish.main}</div>
  ),
}));

describe('components/menu/menu-section.tsx', () => {
  it('renders a section title and dishes', () => {
    render(
      <MenuSection
        title="Entrees"
        dishes={[
          { main: 'Tarte', second: 'aux pommes', sauce: null },
          { main: 'Soupe', second: 'du jour', sauce: null },
        ]}
      />,
    );

    expect(screen.getByText('Entrees')).toBeInTheDocument();
    expect(screen.getAllByTestId('menu-dish')).toHaveLength(2);
  });
});
