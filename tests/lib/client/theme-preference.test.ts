import { beforeEach, describe, expect, it } from 'vitest';
import {
  readThemesEnabled,
  subscribeThemesEnabled,
  THEMES_ENABLED_STORAGE_KEY,
  writeThemesEnabled,
} from '@/lib/client/theme-preference';

describe('lib/client/theme-preference.ts', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('disables themes when no preference is stored', () => {
    expect(readThemesEnabled()).toBe(false);
  });

  it('persists and reads the enabled preference', () => {
    writeThemesEnabled(true);

    expect(window.localStorage.getItem(THEMES_ENABLED_STORAGE_KEY)).toBe('true');
    expect(readThemesEnabled()).toBe(true);
  });

  it('persists the disabled preference', () => {
    writeThemesEnabled(false);

    expect(window.localStorage.getItem(THEMES_ENABLED_STORAGE_KEY)).toBe('false');
    expect(readThemesEnabled()).toBe(false);
  });

  it('notifies subscribers when the preference changes', () => {
    let notificationCount = 0;
    const unsubscribe = subscribeThemesEnabled(() => {
      notificationCount += 1;
    });

    writeThemesEnabled(true);
    unsubscribe();
    writeThemesEnabled(false);

    expect(notificationCount).toBe(1);
  });
});
