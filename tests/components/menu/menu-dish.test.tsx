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

vi.mock('@hugeicons/react', () => ({
  HugeiconsIcon: () => <svg data-testid="dish-icon-svg" />,
}));

describe('components/menu/menu-dish.tsx', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders dish text and sauce', () => {
    const { getByText, getByTestId, getAllByTestId, getByLabelText } = render(
      <MenuDish
        dish={{
          main: 'Tarte',
          second: 'aux pommes',
          sauce: 'caramel',
          icons: ['vegetarian', 'frozen', 'shareable', 'chefRecommendation'],
        }}
      />,
    );

    expect(getByText('Tarte')).toBeInTheDocument();
    expect(getByText('aux pommes')).toBeInTheDocument();
    expect(getByText('caramel')).toBeInTheDocument();
    expect(getByTestId('dice-icon')).toBeInTheDocument();
    expect(getAllByTestId('dish-icon-svg')).toHaveLength(4);
    expect(getByLabelText('Plat végétarien, Ingrédients surgelés, À partager, Recommandation du chef')).toBeInTheDocument();
  });

  it('omits sauce block when no sauce provided', () => {
    const { getByText, queryByTestId } = render(
      <MenuDish
        dish={{
          main: 'Soupe',
          second: 'du jour',
          sauce: null,
          icons: [],
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
          icons: ['spicy'],
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
          icons: ['vegetarian'],
        }}
      />,
    );

    fireEvent.click(getByText('Tarte'));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Erreur lors de la copie du texte');
    });
  });
});
