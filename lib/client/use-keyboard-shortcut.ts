import { useEffect } from 'react';

type ShortcutOptions = {
  enabled?: boolean;
};

export default function useKeyboardShortcut(
  key: string,
  handler: () => void,
  options?: ShortcutOptions,
): void {
  useEffect(() => {
    if (options?.enabled === false) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === key.toLowerCase()) {
        handler();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler, key, options?.enabled]);
}
