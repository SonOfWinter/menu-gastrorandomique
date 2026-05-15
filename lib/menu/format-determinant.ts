export const hasElidedEnding = (determinant: string): boolean =>
  determinant.endsWith('\'') || determinant.endsWith('’');

export const determinantSeparator = (determinant: string): string =>
  determinant !== '' && !hasElidedEnding(determinant) ? ' ' : '';
