import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import MenuDish from '@/components/menu/menu-dish';
import { copyText } from '@/lib/client/copy-text';
import { toast } from 'sonner';

vi.mock('next/font/google', () => ({
  Manrope: () => ({ className: 'font-manrope' }),
}));

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('@/lib/client/copy-text', () => ({
  copyText: vi.fn(),
}));

vi.mock('@/components/dice-icon', () => ({
  default: () => <svg data-testid="dice-icon" />,
}));

describe('components/menu/menu-dish.tsx', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders dish text and sauce', () => {
    const { getByText, getByTestId } = render(
      <MenuDish
        dish={{
          main: 'Tarte',
          second: 'aux pommes',
          sauce: 'caramel',
        }}
      />,
    );

    expect(getByText('Tarte')).toBeInTheDocument();
    expect(getByText('aux pommes')).toBeInTheDocument();
    expect(getByText('caramel')).toBeInTheDocument();
    expect(getByTestId('dice-icon')).toBeInTheDocument();
  });

  it('omits sauce block when no sauce provided', () => {
    const { getByText, queryByTestId } = render(
      <MenuDish
        dish={{
          main: 'Soupe',
          second: 'du jour',
          sauce: null,
        }}
      />,
    );

    expect(getByText('Soupe')).toBeInTheDocument();
    expect(getByText('du jour')).toBeInTheDocument();
    expect(queryByTestId('dice-icon')).toBeNull();
  });

  it('copies text and shows success toast on click', async () => {
    vi.mocked(copyText).mockResolvedValueOnce(undefined);

    const { getByText } = render(
      <MenuDish
        dish={{
          main: 'Tarte',
          second: 'aux pommes',
          sauce: 'caramel',
        }}
      />,
    );

    fireEvent.click(getByText('Tarte'));

    expect(copyText).toHaveBeenCalledWith('Tarte aux pommes caramel');
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Texte copié dans le presse-papiers');
    });
  });

  it('shows error toast when copy fails', async () => {
    vi.mocked(copyText).mockRejectedValueOnce(new Error('fail'));

    const { getByText } = render(
      <MenuDish
        dish={{
          main: 'Tarte',
          second: 'aux pommes',
          sauce: null,
        }}
      />,
    );

    fireEvent.click(getByText('Tarte'));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Erreur lors de la copie du texte');
    });
  });
});
