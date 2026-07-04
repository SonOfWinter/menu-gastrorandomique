import { describe, expect, it, vi, beforeEach } from 'vitest';
import {
  act,
  render,
  waitFor,
} from '@testing-library/react';
import Main from '@/app/main';
import {
  THEMES_ENABLED_STORAGE_KEY,
} from '@/lib/client/theme-preference';
import { toast } from 'sonner';

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('@/components/menu-container', () => ({
  default: () => <section data-testid="menu-container" />,
}));

vi.mock('@/components/navigation', () => ({
  default: () => <nav data-testid="navigation" />,
}));

vi.mock('@/components/dice-button', () => ({
  default: () => <button type="button">Dice</button>,
}));

describe('app/main.tsx', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('toggles themes with the t keyboard shortcut and shows a toast', async () => {
    render(<Main />);

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 't' }));
    });

    await waitFor(() => {
      expect(window.localStorage.getItem(THEMES_ENABLED_STORAGE_KEY)).toBe('true');
    });
    expect(toast.success).toHaveBeenCalledWith('Thèmes activés');

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 't' }));
    });

    await waitFor(() => {
      expect(window.localStorage.getItem(THEMES_ENABLED_STORAGE_KEY)).toBe('false');
    });
    expect(toast.success).toHaveBeenCalledWith('Thèmes désactivés');
  });
});
