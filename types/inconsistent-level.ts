export type InconsistentLevel =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export const MIN_INCONSISTENT_LEVEL = 0;
export const MAX_INCONSISTENT_LEVEL = 20;

export function parseInconsistentLevel(value: string | null): InconsistentLevel | undefined {
  if (value === null || !/^\d+$/.test(value)) {
    return undefined;
  }

  const level = Number(value);
  return level <= MAX_INCONSISTENT_LEVEL ? level as InconsistentLevel : undefined;
}
