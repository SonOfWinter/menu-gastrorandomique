import fs from 'node:fs';
import path from 'node:path';
import adjectifs from '../data/menu-adjectif';
import complements from '../data/menu-complement';
import ingredients from '../data/menu-ingredient';
import liens from '../data/menu-lien';
import plats from '../data/menu-plat';
import posts from '../data/menu-post';
import preSauces from '../data/menu-pre-sauce';
import pres from '../data/menu-pre';
import sauceTypes from '../data/menu-sauce-type';
import themes from '../data/menu-theme';
import titles from '../data/menu-title';
import { EntityId } from '@/types/entity-id';
import { TYPE_ALIMENT_BITS, TypeAliment } from '@/types/enums/type-aliment';
import { TYPE_PLAT_BITS, TypePlat } from '@/types/enums/type-plat';
import { getCompatibilityMask, getMaskIndexes } from '@/lib/menu/compatibility-mask';
import { CompiledThemeWeights, ThemeWeightConfig } from '@/types/data/theme';

function buildIndex<TItem, TType extends string>(
  items: readonly TItem[],
  types: readonly TType[],
  getTypes: (item: TItem) => readonly TType[] | null,
): Record<TType, number[]> {
  return Object.fromEntries(
    types.map((type) => [
      type,
      items
        .map((item, index) => getTypes(item)?.includes(type) ? index : -1)
        .filter((index) => index !== -1),
    ]),
  ) as Record<TType, number[]>;
}

function formatIndexedArray(indexes: readonly number[]): string {
  if (indexes.length === 0) {
    return '[]';
  }

  return `[${indexes.join(', ')}]`;
}

function formatIndex<TType extends string>(
  enumName: string,
  enumEntries: readonly [string, TType][],
  index: Record<TType, number[]>,
): string {
  return `{\n${enumEntries
    .map(([key, value]) => `    [${enumName}.${key}]: ${formatIndexedArray(index[value])},`)
    .join('\n')}\n  }`;
}

function formatData(name: string, typeName: string, value: unknown): string {
  return `const ${name} = ${JSON.stringify(value, null, 2)} as unknown as ${typeName};`;
}

function normalizeIds<TItem extends { id: EntityId }>(items: readonly TItem[]): Array<Omit<TItem, 'id'> & { id: number; sourceId: string }> {
  return items.map(({ id, ...item }, index) => ({
    id: index,
    sourceId: String(id),
    ...item,
  }));
}

function normalizeTypeAlimentItems<TItem extends { id: EntityId; types: readonly TypeAliment[] }>(
  items: readonly TItem[],
): Array<Omit<TItem, 'id'> & { id: number; sourceId: string; compatibilityMask: number }> {
  return normalizeIds(items).map((item) => ({
    ...item,
    compatibilityMask: getCompatibilityMask(item.types, TYPE_ALIMENT_BITS),
  })) as Array<Omit<TItem, 'id'> & { id: number; sourceId: string; compatibilityMask: number }>;
}

function normalizeTypePlatItems<TItem extends { id: EntityId; types: readonly TypePlat[] }>(
  items: readonly TItem[],
): Array<Omit<TItem, 'id'> & { id: number; sourceId: string; compatibilityMask: number }> {
  return normalizeIds(items).map((item) => ({
    ...item,
    compatibilityMask: getCompatibilityMask(item.types, TYPE_PLAT_BITS),
  })) as Array<Omit<TItem, 'id'> & { id: number; sourceId: string; compatibilityMask: number }>;
}

function uniqueNumbers(values: Iterable<number>): number[] {
  return [...new Set(values)].filter((value) => value > 0).sort((a, b) => a - b);
}

function buildThemeWeightIndex(
  sourceWeights: Partial<Record<EntityId, number>> | undefined,
  sourceIdsByGeneratedId: readonly string[],
): Partial<Record<number, number>> {
  if (!sourceWeights) {
    return {};
  }

  return Object.fromEntries(
    sourceIdsByGeneratedId
      .map((sourceId, id) => [id, sourceWeights[sourceId]] as const)
      .filter((entry): entry is readonly [number, number] => entry[1] !== undefined),
  );
}

function buildTypeMaskWeights<TType extends string>(
  sourceWeights: Partial<Record<TType, number>> | undefined,
  bitTable: Record<TType, number>,
): Partial<Record<number, number>> {
  if (!sourceWeights) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(sourceWeights)
      .map(([type, weight]) => [bitTable[type as TType], weight] as const)
      .filter((entry): entry is readonly [number, number] => entry[1] !== undefined),
  );
}

function buildCompiledThemeWeights(
  weights: ThemeWeightConfig,
  sources: {
    adjectifs: readonly string[];
    complements: readonly string[];
    ingredients: readonly string[];
    liens: readonly string[];
    plats: readonly string[];
    posts: readonly string[];
    pres: readonly string[];
    preSauces: readonly string[];
    sauceTypes: readonly string[];
    titles: readonly string[];
  },
): CompiledThemeWeights {
  return {
    typeAlimentMasks: buildTypeMaskWeights(weights.typeAliments, TYPE_ALIMENT_BITS),
    typePlatMasks: buildTypeMaskWeights(weights.typePlats, TYPE_PLAT_BITS),
    ingredients: buildThemeWeightIndex(weights.ingredients, sources.ingredients),
    adjectifs: buildThemeWeightIndex(weights.adjectifs, sources.adjectifs),
    liens: buildThemeWeightIndex(weights.liens, sources.liens),
    plats: buildThemeWeightIndex(weights.plats, sources.plats),
    posts: buildThemeWeightIndex(weights.posts, sources.posts),
    pres: buildThemeWeightIndex(weights.pres, sources.pres),
    preSauces: buildThemeWeightIndex(weights.preSauces, sources.preSauces),
    sauceTypes: buildThemeWeightIndex(weights.sauceTypes, sources.sauceTypes),
    titles: buildThemeWeightIndex(weights.titles, sources.titles),
    complements: buildThemeWeightIndex(weights.complements, sources.complements),
  };
}

const typeAlimentEntries = Object.entries(TypeAliment) as [string, TypeAliment][];
const typePlatEntries = Object.entries(TypePlat) as [string, TypePlat][];

const ingredientsByType = buildIndex(ingredients, Object.values(TypeAliment), (item) => item.types);
const adjectifsByType = buildIndex(adjectifs, Object.values(TypeAliment), (item) => item.types);
const liensByType = buildIndex(liens, Object.values(TypeAliment), (item) => item.compatibleIngredientTypes);
const platsByType = buildIndex(plats, Object.values(TypePlat), (item) => item.types);
const postsByType = buildIndex(posts, Object.values(TypePlat), (item) => item.types);
const presByType = buildIndex(pres, Object.values(TypePlat), (item) => item.types);
const sauceTypesByType = buildIndex(sauceTypes, Object.values(TypePlat), (item) => item.types);
const normalizedAdjectifs = normalizeTypeAlimentItems(adjectifs);
const normalizedComplements = normalizeIds(complements);
const normalizedIngredients = normalizeTypeAlimentItems(ingredients);
const normalizedLiens = normalizeIds(liens).map((item) => ({
  ...item,
  acceptedCompatibilityMask: getCompatibilityMask(item.compatibleIngredientTypes, TYPE_ALIMENT_BITS),
}));
const normalizedPlats = normalizeTypePlatItems(plats).map((item) => ({
  ...item,
  typeAlimentMasks: Object.fromEntries(
    Object.values(TypePlat).map((typePlat) => [
      typePlat,
      getCompatibilityMask(item.typeAliments[typePlat], TYPE_ALIMENT_BITS),
    ]),
  ) as Record<TypePlat, number>,
}));
const normalizedPosts = normalizeTypePlatItems(posts);
const normalizedPreSauces = normalizeIds(preSauces);
const normalizedPres = normalizeTypePlatItems(pres);
const normalizedSauceTypes = normalizeTypePlatItems(sauceTypes).map((item) => ({
  ...item,
  acceptedCompatibilityMask: getCompatibilityMask(item.compatibleIngredientTypes, TYPE_ALIMENT_BITS),
}));
const normalizedTitles = normalizeIds(titles);

const ingredientCompatibilityMasks = uniqueNumbers([
  ...normalizedPlats.flatMap((item) => Object.values(item.typeAlimentMasks)),
  getCompatibilityMask(Object.values(TypeAliment), TYPE_ALIMENT_BITS),
  TYPE_ALIMENT_BITS[TypeAliment.SAUCE],
  ...normalizedSauceTypes.map((item) => item.acceptedCompatibilityMask),
]);
const adjectifAcceptedMasks = uniqueNumbers(normalizedIngredients.map((item) => item.compatibilityMask));
const lienAcceptedMasks = adjectifAcceptedMasks;
const ingredientsByCompatibilityMask = getMaskIndexes(
  normalizedIngredients,
  ingredientCompatibilityMasks,
  (item) => item.compatibilityMask,
);
const adjectifsByAcceptedMask = getMaskIndexes(
  normalizedAdjectifs,
  adjectifAcceptedMasks,
  (item) => item.compatibilityMask,
);
const liensByAcceptedMask = getMaskIndexes(
  normalizedLiens,
  lienAcceptedMasks,
  (item) => item.acceptedCompatibilityMask,
);
const normalizedThemes = themes.map((theme) => ({
  id: theme.id,
  nom: theme.nom,
  weights: buildCompiledThemeWeights(theme.weights, {
    adjectifs: normalizedAdjectifs.map((item) => item.sourceId),
    complements: normalizedComplements.map((item) => item.sourceId),
    ingredients: normalizedIngredients.map((item) => item.sourceId),
    liens: normalizedLiens.map((item) => item.sourceId),
    plats: normalizedPlats.map((item) => item.sourceId),
    posts: normalizedPosts.map((item) => item.sourceId),
    pres: normalizedPres.map((item) => item.sourceId),
    preSauces: normalizedPreSauces.map((item) => item.sourceId),
    sauceTypes: normalizedSauceTypes.map((item) => item.sourceId),
    titles: normalizedTitles.map((item) => item.sourceId),
  }),
}));

const generated = `/* This file is generated by scripts/generate-menu-data.ts. Do not edit manually. */
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypePlat } from '@/types/enums/type-plat';
import type { Adjectif } from '@/types/data/adjectif';
import type { Complement } from '@/types/data/complement';
import type { Ingredient } from '@/types/data/ingredient';
import type { Lien } from '@/types/data/lien';
import type { Plat } from '@/types/data/plat';
import type { Post } from '@/types/data/post';
import type { PreSauce } from '@/types/data/pre-sauce';
import type { Pre } from '@/types/data/pre';
import type { SauceType } from '@/types/data/sauce-type';
import type { Title } from '@/types/data/title';
import type { CompiledTheme } from '@/types/data/theme';
import type { Menu } from '@/types/menu';
import type { MenuIndexes } from '@/types/menu-indexes';

${formatData('adjectifs', 'Adjectif[]', normalizedAdjectifs)}

${formatData('complements', 'Complement[]', normalizedComplements)}

${formatData('ingredients', 'Ingredient[]', normalizedIngredients)}

${formatData('liens', 'Lien[]', normalizedLiens)}

${formatData('plats', 'Plat[]', normalizedPlats)}

${formatData('posts', 'Post[]', normalizedPosts)}

${formatData('preSauces', 'PreSauce[]', normalizedPreSauces)}

${formatData('pres', 'Pre[]', normalizedPres)}

${formatData('sauceTypes', 'SauceType[]', normalizedSauceTypes)}

${formatData('titles', 'Title[]', normalizedTitles)}

${formatData('themes', 'CompiledTheme[]', normalizedThemes)}

export const indexes: MenuIndexes = {
  ingredientIdsByType: ${formatIndex('TypeAliment', typeAlimentEntries, ingredientsByType)},
  ingredientIdsByCompatibilityMask: ${JSON.stringify(ingredientsByCompatibilityMask)},
  adjectifIdsByType: ${formatIndex('TypeAliment', typeAlimentEntries, adjectifsByType)},
  adjectifIdsByAcceptedMask: ${JSON.stringify(adjectifsByAcceptedMask)},
  lienIdsByType: ${formatIndex('TypeAliment', typeAlimentEntries, liensByType)},
  lienIdsByAcceptedMask: ${JSON.stringify(liensByAcceptedMask)},
  platIdsByType: ${formatIndex('TypePlat', typePlatEntries, platsByType)},
  postIdsByType: ${formatIndex('TypePlat', typePlatEntries, postsByType)},
  preIdsByType: ${formatIndex('TypePlat', typePlatEntries, presByType)},
  sauceTypeIdsByType: ${formatIndex('TypePlat', typePlatEntries, sauceTypesByType)},
};

const menuData: Menu = {
  adjectifs,
  complements,
  ingredients,
  liens,
  plats,
  posts,
  pres,
  titles,
  preSauces,
  sauceTypes,
  themes,
  indexes,
};

export default menuData;
`;

const outputDir = path.join(process.cwd(), 'data-build');
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'menu-data.generated.ts'), generated);

console.log('Generated data-build/menu-data.generated.ts');
