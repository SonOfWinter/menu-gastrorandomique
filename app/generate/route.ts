import generateMenu from '@/lib/generate-menu';
import { DisplayMenu } from '@/types/display-menu';
import { MenuResponse } from '@/types/menu-response';
import { defaultMenuConfig } from '@/lib/menu/menu-config';

export type MenuResponse = {menu: DisplayMenu};

export const dynamic = 'force-dynamic';

export async function GET():Promise<Response> {
  const menu:DisplayMenu = generateMenu(
    defaultMenuConfig.dishCount,
    defaultMenuConfig.inconsistentLevel,
    defaultMenuConfig.priceRange,
  );
  const response: MenuResponse = { menu: menu };
  return Response.json(response);
}
