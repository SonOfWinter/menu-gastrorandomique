import { InconsistentLevelSetting } from '@/types/inconsistent-level';

export const INCONSISTENCY_ENABLED_STORAGE_KEY = 'menu-gastrorandomique:inconsistency-enabled';
export const INCONSISTENCY_LEVEL_STORAGE_KEY = 'menu-gastrorandomique:inconsistency-level';

const INCONSISTENCY_CHANGE_EVENT = 'menu-gastrorandomique:inconsistency-change';

export function isInconsistentLevelSetting(value: number): value is InconsistentLevelSetting {
  return Number.isInteger(value) && value >= -1 && value <= 20;
}

export function readInconsistencyEnabled(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(INCONSISTENCY_ENABLED_STORAGE_KEY) === 'true';
}

export function readInconsistencyLevel(): InconsistentLevelSetting {
  if (typeof window === 'undefined') {
    return 0;
  }

  const storedLevel = window.localStorage.getItem(INCONSISTENCY_LEVEL_STORAGE_KEY);
  const parsedLevel = storedLevel ? Number.parseInt(storedLevel, 10) : NaN;

  return isInconsistentLevelSetting(parsedLevel) ? parsedLevel : 0;
}

export function writeInconsistencyEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(INCONSISTENCY_ENABLED_STORAGE_KEY, String(enabled));
  window.dispatchEvent(new Event(INCONSISTENCY_CHANGE_EVENT));
}

export function writeInconsistencyLevel(level: InconsistentLevelSetting): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(INCONSISTENCY_LEVEL_STORAGE_KEY, String(level));
  window.dispatchEvent(new Event(INCONSISTENCY_CHANGE_EVENT));
}

export function subscribeInconsistencyPreference(onStoreChange: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  window.addEventListener('storage', onStoreChange);
  window.addEventListener(INCONSISTENCY_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(INCONSISTENCY_CHANGE_EVENT, onStoreChange);
  };
}
