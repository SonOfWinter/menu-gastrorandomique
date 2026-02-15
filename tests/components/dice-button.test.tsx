import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, cleanup } from '@testing-library/react';
import DiceButton from '@/components/dice-button';
import useKeyboardShortcut from '@/lib/client/use-keyboard-shortcut';

vi.mock('@/lib/client/use-keyboard-shortcut', () => ({
  default: vi.fn(),
}));

vi.mock('@/components/dice-icon', () => ({
  default: () => <svg data-testid="dice-icon" />,
}));

describe('components/dice-button.tsx', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('triggers left-to-right transition for left variant', () => {
    const setTransition = vi.fn();
    const { getByRole } = render(
      <DiceButton
        variant="left"
        setTransition={setTransition}
        isLoading={false}
      />,
    );

    fireEvent.click(getByRole('button'));
    expect(setTransition).toHaveBeenCalledWith('left-to-right');
  });

  it('triggers right-to-left transition for main variant', () => {
    const setTransition = vi.fn();
    const { getByRole } = render(
      <DiceButton
        variant="main"
        setTransition={setTransition}
        isLoading={false}
      />,
    );

    fireEvent.click(getByRole('button'));
    expect(setTransition).toHaveBeenCalledWith('right-to-left');
  });

  it('triggers right-to-left transition for right variant', () => {
    const setTransition = vi.fn();
    const { getByRole } = render(
      <DiceButton
        variant="right"
        setTransition={setTransition}
        isLoading={false}
      />,
    );

    fireEvent.click(getByRole('button'));
    expect(setTransition).toHaveBeenCalledWith('right-to-left');
  });

  it('does not trigger transition when pending', () => {
    const setTransition = vi.fn();
    const { getByRole } = render(
      <DiceButton
        variant="pending"
        setTransition={setTransition}
        isLoading={false}
      />,
    );

    fireEvent.click(getByRole('button'));
    expect(setTransition).not.toHaveBeenCalled();
    expect(getByRole('button')).toBeDisabled();
  });

  it('does not trigger transition when loading', () => {
    const setTransition = vi.fn();
    const { getByRole } = render(
      <DiceButton
        variant="main"
        setTransition={setTransition}
        isLoading
      />,
    );

    fireEvent.click(getByRole('button'));
    expect(setTransition).not.toHaveBeenCalled();
    expect(getByRole('button')).toBeDisabled();
  });

  it('wires keyboard shortcut when enabled', () => {
    const setTransition = vi.fn();
    render(
      <DiceButton
        variant="main"
        setTransition={setTransition}
        isLoading={false}
      />,
    );

    expect(useKeyboardShortcut).toHaveBeenCalledWith(
      'r',
      expect.any(Function),
      { enabled: true },
    );
  });

  it('disables keyboard shortcut when pending', () => {
    const setTransition = vi.fn();
    render(
      <DiceButton
        variant="pending"
        setTransition={setTransition}
        isLoading={false}
      />,
    );

    expect(useKeyboardShortcut).toHaveBeenCalledWith(
      'r',
      expect.any(Function),
      { enabled: false },
    );
  });
});
