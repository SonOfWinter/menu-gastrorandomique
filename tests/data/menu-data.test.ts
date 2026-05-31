import { describe, expect, it } from 'vitest';
import adjectifs from '@/data/menu-adjectif';
import complements from '@/data/menu-complement';
import ingredients from '@/data/menu-ingredient';
import liens from '@/data/menu-lien';
import plats from '@/data/menu-plat';
import posts from '@/data/menu-post';
import pres from '@/data/menu-pre';
import preSauces from '@/data/menu-pre-sauce';
import sauceTypes from '@/data/menu-sauce-type';
import titles from '@/data/menu-title';
import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeAliment } from '@/types/enums/type-aliment';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { TypePlat } from '@/types/enums/type-plat';
import { Theme } from '@/types/enums/theme';
import { EntityId } from '@/types/entity-id';

const genres = Object.values(Genre);
const nombres = Object.values(Nombre);
const typeAliments = Object.values(TypeAliment);
const typeDeterminants = Object.values(TypeDeterminant);
const typePlats = Object.values(TypePlat);
const themes = Object.values(Theme);

function expectNonEmptyString(value: unknown, label: string) {
  expect(typeof value, label).toBe('string');
  expect((value as string).trim().length, label).toBeGreaterThan(0);
}

function expectUniqueValues(values: readonly EntityId[], label: string) {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  expect([...new Set(duplicates)], label).toEqual([]);
}

function expectKnownValues<T extends string>(
  values: readonly T[],
  allowedValues: readonly T[],
  label: string,
) {
  expect(values.length, label).toBeGreaterThan(0);
  expectUniqueValues([...values], label);
  expect(values.every((value) => allowedValues.includes(value)), label).toBe(true);
}

function expectNomForms(
  noms: Record<Genre, Record<Nombre, string>>,
  label: string,
) {
  for (const genre of genres) {
    for (const nombre of nombres) {
      expectNonEmptyString(noms[genre]?.[nombre], `${label}.${genre}.${nombre}`);
    }
  }
}

function expectDeterminants(
  determinants: Record<TypeDeterminant, string>,
  label: string,
) {
  for (const typeDeterminant of typeDeterminants) {
    expectNonEmptyString(
      determinants[typeDeterminant],
      `${label}.${typeDeterminant}`,
    );
  }
}

function expectCollectionIds(
  collection: readonly { id: EntityId }[],
  label: string,
) {
  expect(collection.length, label).toBeGreaterThan(0);
  collection.forEach((item, index) => expectNonEmptyString(String(item.id), `${label}[${index}].id`));
  expectUniqueValues(collection.map((item) => item.id), `${label}.ids`);
}

function expectCollectionNames(
  collection: readonly { nom: string }[],
  label: string,
) {
  collection.forEach((item, index) => expectNonEmptyString(item.nom, `${label}[${index}].nom`));
  expectUniqueValues(collection.map((item) => item.nom), `${label}.noms`);
}

describe('data consistency', () => {
  it('keeps menu-adjectif entries structurally valid', () => {
    expectCollectionIds(adjectifs, 'adjectifs');

    adjectifs.forEach((adjectif, index) => {
      const label = `adjectifs[${index}]`;
      expectNomForms(adjectif.noms, `${label}.noms`);
      expectKnownValues(adjectif.types, typeAliments, `${label}.types`);
    });
  });

  it('keeps menu-complement entries structurally valid', () => {
    expectCollectionIds(complements, 'complements');
    expectCollectionNames(complements, 'complements');
  });

  it('keeps menu-ingredient entries structurally valid', () => {
    expectCollectionIds(ingredients, 'ingredients');
    expectCollectionNames(ingredients, 'ingredients');

    ingredients.forEach((ingredient, index) => {
      const label = `ingredients[${index}] ${ingredient.nom}`;
      expect(genres.includes(ingredient.genre), `${label}.genre`).toBe(true);
      expect(nombres.includes(ingredient.nombre), `${label}.nombre`).toBe(true);
      expectKnownValues(ingredient.types, typeAliments, `${label}.types`);
      expectDeterminants(ingredient.determinants, `${label}.determinants`);

      if (ingredient.postAdjectifs) {
        expectUniqueValues(ingredient.postAdjectifs, `${label}.postAdjectifs`);
        ingredient.postAdjectifs.forEach((postAdjectif, postAdjectifIndex) => {
          expect(typeof postAdjectif, `${label}.postAdjectifs[${postAdjectifIndex}]`).toBe('string');
        });
      }

      if (ingredient.isSpicy !== undefined) {
        expect(typeof ingredient.isSpicy, `${label}.isSpicy`).toBe('boolean');
      }
    });
  });

  it('keeps menu-lien entries structurally valid', () => {
    expectCollectionIds(liens, 'liens');

    liens.forEach((lien, index) => {
      const label = `liens[${index}]`;
      expectNomForms(lien.noms, `${label}.noms`);
      expect(typeDeterminants.includes(lien.suite), `${label}.suite`).toBe(true);
      expectKnownValues(
        lien.compatibleIngredientTypes,
        typeAliments,
        `${label}.compatibleIngredientTypes`,
      );
    });
  });

  it('keeps menu-plat entries structurally valid', () => {
    expectCollectionIds(plats, 'plats');
    expectCollectionNames(plats, 'plats');

    plats.forEach((plat, index) => {
      const label = `plats[${index}] ${plat.nom}`;
      expect(genres.includes(plat.genre), `${label}.genre`).toBe(true);
      expect(nombres.includes(plat.nombre), `${label}.nombre`).toBe(true);
      expectKnownValues(plat.types, typePlats, `${label}.types`);

      for (const typePlat of typePlats) {
        const typeAlimentsForPlat = plat.typeAliments[typePlat];
        expect(Array.isArray(typeAlimentsForPlat), `${label}.typeAliments.${typePlat}`).toBe(true);
        expectUniqueValues(
          typeAlimentsForPlat,
          `${label}.typeAliments.${typePlat}`,
        );
        expect(
          typeAlimentsForPlat.every((typeAliment) => typeAliments.includes(typeAliment)),
          `${label}.typeAliments.${typePlat}`,
        ).toBe(true);
      }

      for (const typePlat of plat.types) {
        expect(
          plat.typeAliments[typePlat].length,
          `${label}.typeAliments.${typePlat}`,
        ).toBeGreaterThan(0);
      }
    });
  });

  it('keeps menu-post entries structurally valid', () => {
    expectCollectionIds(posts, 'posts');
    expectCollectionNames(posts, 'posts');

    posts.forEach((post, index) => {
      expectKnownValues(post.types, typePlats, `posts[${index}] ${post.nom}.types`);
    });
  });

  it('keeps menu-pre entries structurally valid', () => {
    expectCollectionIds(pres, 'pres');

    pres.forEach((pre, index) => {
      const label = `pres[${index}]`;
      expectNomForms(pre.noms, `${label}.noms`);
      expectKnownValues(pre.types, typePlats, `${label}.types`);
    });
  });

  it('keeps menu-pre-sauce entries structurally valid', () => {
    expectCollectionIds(preSauces, 'preSauces');

    preSauces.forEach((preSauce, index) => {
      const label = `preSauces[${index}]`;
      expectNomForms(preSauce.noms, `${label}.noms`);
      expect(typeDeterminants.includes(preSauce.suite), `${label}.suite`).toBe(true);
    });
  });

  it('keeps menu-sauce-type entries structurally valid', () => {
    expectCollectionIds(sauceTypes, 'sauceTypes');
    expectCollectionNames(sauceTypes, 'sauceTypes');

    sauceTypes.forEach((sauceType, index) => {
      const label = `sauceTypes[${index}] ${sauceType.nom}`;
      expect(genres.includes(sauceType.genre), `${label}.genre`).toBe(true);
      expect(nombres.includes(sauceType.nombre), `${label}.nombre`).toBe(true);
      expectDeterminants(sauceType.determinants, `${label}.determinants`);
      expectKnownValues(sauceType.types, typePlats, `${label}.types`);
      expect(typeDeterminants.includes(sauceType.suite), `${label}.suite`).toBe(true);

      if (sauceType.compatibleIngredientTypes !== null) {
        expectKnownValues(
          sauceType.compatibleIngredientTypes,
          typeAliments,
          `${label}.compatibleIngredientTypes`,
        );
      }
    });
  });

  it('keeps menu-title entries structurally valid', () => {
    expectCollectionIds(titles, 'titles');
    titles.forEach((title, index) => expectNonEmptyString(title.nom, `titles[${index}].nom`));
  });

  it('keeps menu-theme entries structurally valid', () => {
    expect(themes.length).toBeGreaterThan(0);
    expectUniqueValues(themes, 'themes');
    themes.forEach((theme, index) => {
      expectNonEmptyString(theme, `themes[${index}]`);
    });
  });
});
