import {
  MIN_INCONSISTENT_LEVEL,
  parseInconsistentLevel,
  type InconsistentLevel,
} from '@/types/inconsistent-level';

const storageKey = 'menu-gastrorandomique:inconsistent-level';
const changeEvent = 'menu-gastrorandomique:inconsistent-level-change';

export function readInconsistentLevel(): InconsistentLevel {
  return parseInconsistentLevel(window.localStorage.getItem(storageKey)) ?? MIN_INCONSISTENT_LEVEL;
}

export function writeInconsistentLevel(level: InconsistentLevel): void {
  window.localStorage.setItem(storageKey, String(level));
  window.dispatchEvent(new Event(changeEvent));
}

export function subscribeInconsistentLevel(onChange: () => void): () => void {
  window.addEventListener('storage', onChange);
  window.addEventListener(changeEvent, onChange);

  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}
