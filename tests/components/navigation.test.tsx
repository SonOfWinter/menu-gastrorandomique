import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Navigation from '@/components/navigation';
import useKeyboardShortcut from '@/lib/client/use-keyboard-shortcut';

vi.mock('@/lib/client/use-keyboard-shortcut', () => ({
  default: vi.fn(),
}));

vi.mock('@hugeicons/react', () => ({
  HugeiconsIcon: () => <svg data-testid="nav-icon" />,
}));

vi.mock('@hugeicons/core-free-icons', () => ({
  Cancel01Icon: {},
}));

describe('components/navigation.tsx', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('wires the keyboard shortcut to reset to main', () => {
    const setPosition = vi.fn();
    render(
      <Navigation
        variant="main"
        setPosition={setPosition}
      />,
    );

    expect(useKeyboardShortcut).toHaveBeenCalledWith(
      'm',
      expect.any(Function),
    );
  });

  it('shows the close button for left and right variants', () => {
    const setPosition = vi.fn();
    const { getByRole, rerender } = render(
      <Navigation
        variant="left"
        setPosition={setPosition}
      />,
    );

    expect(getByRole('button')).toHaveClass('block');

    rerender(
      <Navigation
        variant="right"
        setPosition={setPosition}
      />,
    );

    expect(getByRole('button')).toHaveClass('block');
  });

  it('hides the close button for main variant', () => {
    const setPosition = vi.fn();
    const { getByRole } = render(
      <Navigation
        variant="main"
        setPosition={setPosition}
      />,
    );

    expect(getByRole('button')).toHaveClass('hidden');
  });

  it('sets position to main when close button is clicked', () => {
    const setPosition = vi.fn();
    const { getByRole } = render(
      <Navigation
        variant="left"
        setPosition={setPosition}
      />,
    );

    fireEvent.click(getByRole('button'));
    expect(setPosition).toHaveBeenCalledWith('main');
  });
});
