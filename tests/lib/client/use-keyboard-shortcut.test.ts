import { describe, expect, it, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useKeyboardShortcut from '@/lib/client/use-keyboard-shortcut';

describe('lib/client/use-keyboard-shortcut.ts', () => {
  it('handles keyboard shortcuts when enabled', () => {
    const handler = vi.fn();
    renderHook(() => useKeyboardShortcut('k', handler));

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k' }));
    });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('skips keyboard shortcuts when disabled', () => {
    const handler = vi.fn();
    renderHook(() => useKeyboardShortcut('k', handler, { enabled: false }));

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k' }));
    });

    expect(handler).not.toHaveBeenCalled();
  });
});
