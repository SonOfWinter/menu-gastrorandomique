import generateMenu from '@/lib/generate-menu';
import { DisplayMenu } from '@/types/display-menu';

export type MenuResponse = {menu: DisplayMenu};

export async function GET():Promise<Response> {
  const menu:DisplayMenu = generateMenu(3, 0);
  return Response.json({ menu: menu });
}
