import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
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
  Settings01Icon: {},
  Tag01Icon: {},
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
        onToggleSettings={vi.fn()}
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
    const { getAllByRole, rerender } = render(
      <Navigation
        onToggleSettings={vi.fn()}
        variant="left"
        setPosition={setPosition}
      />,
    );

    const closeLeft = getAllByRole('button').find(
      (button) => !button.getAttribute('aria-label'),
    );
    expect(closeLeft).toBeTruthy();
    expect(closeLeft).toHaveClass('block');

    rerender(
      <Navigation
        onToggleSettings={vi.fn()}
        variant="right"
        setPosition={setPosition}
      />,
    );

    const closeRight = getAllByRole('button').find(
      (button) => !button.getAttribute('aria-label'),
    );
    expect(closeRight).toBeTruthy();
    expect(closeRight).toHaveClass('block');
  });

  it('hides the close button for main variant', () => {
    const setPosition = vi.fn();
    const { getAllByRole } = render(
      <Navigation
        onToggleSettings={vi.fn()}
        variant="main"
        setPosition={setPosition}
      />,
    );

    const closeButton = getAllByRole('button').find(
      (button) => !button.getAttribute('aria-label'),
    );
    expect(closeButton).toBeTruthy();
    expect(closeButton).toHaveClass('hidden');
  });

  it('sets position to main when close button is clicked', () => {
    const setPosition = vi.fn();
    const { getAllByRole } = render(
      <Navigation
        onToggleSettings={vi.fn()}
        variant="left"
        setPosition={setPosition}
      />,
    );

    const closeButton = getAllByRole('button').find(
      (button) => !button.getAttribute('aria-label'),
    );
    expect(closeButton).toBeTruthy();
    fireEvent.click(closeButton as Element);
    expect(setPosition).toHaveBeenCalledWith('main');
  });

  it('shows the theme in both result views and clears it between draws', () => {
    const setPosition = vi.fn();
    const { getByRole, queryByRole, queryByText, rerender } = render(
      <Navigation onToggleSettings={vi.fn()} variant="left" setPosition={setPosition} themeName="Bretagne" />,
    );

    fireEvent.click(getByRole('button', { name: 'Thème · Bretagne' }));
    rerender(<Navigation onToggleSettings={vi.fn()} variant="pending" setPosition={setPosition} themeName="Bretagne" />);
    expect(queryByRole('button', { name: /Thème/ })).toBeNull();
    expect(queryByText('Thème · Bretagne')).toBeNull();

    rerender(<Navigation onToggleSettings={vi.fn()} variant="right" setPosition={setPosition} themeName="Provence" />);
    expect(getByRole('button', { name: 'Thème · Provence' })).toHaveAttribute('aria-expanded', 'false');
    expect(queryByRole('button', { name: 'Thème · Bretagne' })).toBeNull();

    rerender(<Navigation onToggleSettings={vi.fn()} variant="right" setPosition={setPosition} />);
    expect(queryByRole('button', { name: /Thème/ })).toBeNull();
  });

  it('reveals the theme on focus and dismisses it with Escape or an outside press', () => {
    const { getByRole, getByText, queryByText } = render(
      <Navigation onToggleSettings={vi.fn()} variant="right" setPosition={vi.fn()} themeName="Bretagne" />,
    );
    const indicator = getByRole('button', { name: 'Thème · Bretagne' });

    act(() => indicator.focus());
    expect(getByText('Thème · Bretagne')).toBeVisible();
    fireEvent.keyDown(indicator, { key: 'Escape' });
    expect(queryByText('Thème · Bretagne')).toBeNull();
    expect(indicator).toHaveFocus();

    fireEvent.click(indicator);
    expect(getByText('Thème · Bretagne')).toBeVisible();
    fireEvent.pointerDown(document.body);
    expect(queryByText('Thème · Bretagne')).toBeNull();
  });

  it.each([
    ['left', 'md:pr-6'],
    ['right', 'md:pl-6'],
  ] as const)('adds space toward the menu in the %s view', (variant, desktopPadding) => {
    const { getByRole, getByText } = render(
      <Navigation onToggleSettings={vi.fn()} variant={variant} setPosition={vi.fn()} themeName="Bretagne" />,
    );

    fireEvent.click(getByRole('button', { name: 'Thème · Bretagne' }));
    expect(getByText('Thème · Bretagne').parentElement).toHaveClass(
      desktopPadding, '-right-1', 'pb-5', 'md:pb-0',
    );
  });
});
