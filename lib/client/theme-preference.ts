export const THEMES_ENABLED_STORAGE_KEY = 'menu-gastrorandomique:themes-enabled';
const THEMES_ENABLED_CHANGE_EVENT = 'menu-gastrorandomique:themes-enabled-change';

export function readThemesEnabled(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(THEMES_ENABLED_STORAGE_KEY) === 'true';
}

export function writeThemesEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(THEMES_ENABLED_STORAGE_KEY, String(enabled));
  window.dispatchEvent(new Event(THEMES_ENABLED_CHANGE_EVENT));
}

export function subscribeThemesEnabled(onStoreChange: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  window.addEventListener('storage', onStoreChange);
  window.addEventListener(THEMES_ENABLED_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(THEMES_ENABLED_CHANGE_EVENT, onStoreChange);
  };
}
