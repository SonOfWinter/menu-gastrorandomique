import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MenuContainer from '@/components/menu-container';
import { copyText } from '@/lib/client/copy-text';
import { toast } from 'sonner';
import { DEFAULT_THEME_PALETTE } from '@/types/enums/theme';

vi.mock('@/lib/client/copy-text', () => ({
  copyText: vi.fn().mockResolvedValue(undefined),
}));

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('next/font/google', () => ({
  Bebas_Neue: () => ({ className: 'font-bebas' }),
}));

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
        themesEnabled={false}
        inconsistentLevel={0}
        onInconsistentLevelChange={vi.fn()}
        onThemesEnabledChange={vi.fn()}
      />,
    );

    expect(screen.queryByTestId('menu-title')).toBeNull();
    expect(screen.queryByTestId('menu-section-Entrée')).toBeNull();
  });

  it('renders menu title and sections when menu is provided', async () => {
    window.history.replaceState(null, '', '/?seed=123');
    render(
      <MenuContainer
        variant="right"
        themesEnabled={false}
        inconsistentLevel={0}
        onInconsistentLevelChange={vi.fn()}
        onThemesEnabledChange={vi.fn()}
        menu={{
          title: 'Menu Test',
          complement: 'du chef',
          price: 42,
          theme: {
            nom: 'Hiver',
            palette: DEFAULT_THEME_PALETTE,
          },
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
    fireEvent.click(screen.getByRole('button', { name: 'Partager' }));
    expect(copyText).toHaveBeenCalledWith(window.location.href);
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Lien copié dans le presse-papiers');
    });
  });

  it('shows both theme button states and requests the opposite setting on click', () => {
    const onThemesEnabledChange = vi.fn();
    const { rerender } = render(
      <MenuContainer
        variant="settings"
        menu={null}
        themesEnabled={false}
        inconsistentLevel={0}
        onInconsistentLevelChange={vi.fn()}
        onThemesEnabledChange={onThemesEnabledChange}
      />,
    );

    const themeButton = screen.getByRole('button', { name: 'Thèmes', pressed: false });
    expect(screen.getByText('Thèmes : désactivé')).toBeVisible();

    fireEvent.click(themeButton);
    expect(onThemesEnabledChange).toHaveBeenCalledWith(true);

    rerender(
      <MenuContainer
        variant="settings"
        menu={null}
        themesEnabled
        inconsistentLevel={0}
        onInconsistentLevelChange={vi.fn()}
        onThemesEnabledChange={onThemesEnabledChange}
      />,
    );

    expect(screen.getByText('Thèmes : activé')).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Thèmes', pressed: true }));
    expect(onThemesEnabledChange).toHaveBeenLastCalledWith(false);
  });
});
