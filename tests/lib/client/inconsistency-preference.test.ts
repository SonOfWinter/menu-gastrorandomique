import { beforeEach, describe, expect, it } from 'vitest';
import {
  INCONSISTENCY_ENABLED_STORAGE_KEY,
  INCONSISTENCY_LEVEL_STORAGE_KEY,
  isInconsistentLevelSetting,
  readInconsistencyEnabled,
  readInconsistencyLevel,
  subscribeInconsistencyPreference,
  writeInconsistencyEnabled,
  writeInconsistencyLevel,
} from '@/lib/client/inconsistency-preference';

describe('lib/client/inconsistency-preference.ts', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('disables inconsistency and uses zero by default', () => {
    expect(readInconsistencyEnabled()).toBe(false);
    expect(readInconsistencyLevel()).toBe(0);
  });

  it('persists the enabled preference and level', () => {
    writeInconsistencyEnabled(true);
    writeInconsistencyLevel(-1);

    expect(window.localStorage.getItem(INCONSISTENCY_ENABLED_STORAGE_KEY)).toBe('true');
    expect(window.localStorage.getItem(INCONSISTENCY_LEVEL_STORAGE_KEY)).toBe('-1');
    expect(readInconsistencyEnabled()).toBe(true);
    expect(readInconsistencyLevel()).toBe(-1);
  });

  it('rejects invalid stored levels', () => {
    window.localStorage.setItem(INCONSISTENCY_LEVEL_STORAGE_KEY, '21');

    expect(readInconsistencyLevel()).toBe(0);
    expect(isInconsistentLevelSetting(-1)).toBe(true);
    expect(isInconsistentLevelSetting(20)).toBe(true);
    expect(isInconsistentLevelSetting(21)).toBe(false);
  });

  it('notifies subscribers when the preference changes', () => {
    let notificationCount = 0;
    const unsubscribe = subscribeInconsistencyPreference(() => {
      notificationCount += 1;
    });

    writeInconsistencyEnabled(true);
    unsubscribe();
    writeInconsistencyLevel(3);

    expect(notificationCount).toBe(1);
  });
});
