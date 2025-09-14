import { Menu } from '@/types/menu';
import adjectifs from '@/data/menu-adjectif';
import complements from '@/data/menu-complement';
import ingredients from '@/data/menu-ingredient';
import liens from '@/data/menu-lien';
import titles from '@/data/menu-title';
import plats from '@/data/menu-plat';
import posts from '@/data/menu-post';
import pres from '@/data/menu-pre';
import preSauces from '@/data/menu-pre-sauce';
import sauceTypes from '@/data/menu-sauce-type';

export default function getMenuData(): Menu {
  return {
    adjectifs: adjectifs,
    complements: complements,
    ingredients: ingredients,
    liens: liens,
    titles: titles,
    plats: plats,
    posts: posts,
    pres: pres,
    preSauces: preSauces,
    sauceTypes: sauceTypes,
  };
}
