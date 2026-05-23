import { TypeDeterminant } from '@/types/enums/type-determinant';

export const determinantPresets = {
  masculineConsonant: {
    [TypeDeterminant.PRINCIPAL]: 'de',
    [TypeDeterminant.SECONDAIRE]: 'du',
    [TypeDeterminant.POSSESSIF]: 'son',
    [TypeDeterminant.INDEFINI]: 'd’un',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'un',
  },
  masculineVowel: {
    [TypeDeterminant.PRINCIPAL]: 'd’',
    [TypeDeterminant.SECONDAIRE]: 'de l’',
    [TypeDeterminant.POSSESSIF]: 'son',
    [TypeDeterminant.INDEFINI]: 'd’un',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'un',
  },
  feminineConsonant: {
    [TypeDeterminant.PRINCIPAL]: 'de',
    [TypeDeterminant.SECONDAIRE]: 'de la',
    [TypeDeterminant.POSSESSIF]: 'sa',
    [TypeDeterminant.INDEFINI]: 'd’une',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'une',
  },
  feminineVowel: {
    [TypeDeterminant.PRINCIPAL]: 'd’',
    [TypeDeterminant.SECONDAIRE]: 'de l’',
    [TypeDeterminant.POSSESSIF]: 'son',
    [TypeDeterminant.INDEFINI]: 'd’une',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'une',
  },
  plural: {
    [TypeDeterminant.PRINCIPAL]: 'de',
    [TypeDeterminant.SECONDAIRE]: 'des',
    [TypeDeterminant.POSSESSIF]: 'ses',
    [TypeDeterminant.INDEFINI]: 'des',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'des',
  },
  pluralVowel: {
    [TypeDeterminant.PRINCIPAL]: 'd’',
    [TypeDeterminant.SECONDAIRE]: 'des',
    [TypeDeterminant.POSSESSIF]: 'ses',
    [TypeDeterminant.INDEFINI]: 'des',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'des',
  },
  masculineVowelSecondaryDu: {
    [TypeDeterminant.PRINCIPAL]: 'd’',
    [TypeDeterminant.SECONDAIRE]: 'du',
    [TypeDeterminant.POSSESSIF]: 'son',
    [TypeDeterminant.INDEFINI]: 'd’un',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'un',
  },
  feminineVowelPossessiveSa: {
    [TypeDeterminant.PRINCIPAL]: 'd’',
    [TypeDeterminant.SECONDAIRE]: 'de l’',
    [TypeDeterminant.POSSESSIF]: 'sa',
    [TypeDeterminant.INDEFINI]: 'd’une',
    [TypeDeterminant.ARTICLE_INDEFINI]: 'une',
  },
} satisfies Record<string, Record<TypeDeterminant, string>>;
