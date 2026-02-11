import generateMenu from '@/lib/generate-menu';
import { DisplayMenu } from '@/types/display-menu';
import { MenuResponse } from '@/types/menu-response';

export const dynamic = 'force-dynamic';

export async function GET():Promise<Response> {
  const menu:DisplayMenu = generateMenu(3, 0);
  const response: MenuResponse = { menu: menu };
  return Response.json(response);
}
