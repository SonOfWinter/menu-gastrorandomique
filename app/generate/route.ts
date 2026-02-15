import { NextRequest } from 'next/server';
import generateMenu from '@/lib/generate-menu';
import { DisplayMenu } from '@/types/display-menu';
import { MenuResponse } from '@/types/menu-response';
import { defaultMenuConfig } from '@/lib/menu/menu-config';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest):Promise<Response> {
  const seedParam = request.nextUrl.searchParams.get('seed');
  const parsedSeed = seedParam ? Number.parseInt(seedParam, 10) : NaN;
  const seed = Number.isFinite(parsedSeed) ? parsedSeed : undefined;
  const menu:DisplayMenu = generateMenu(
    defaultMenuConfig.dishCount,
    defaultMenuConfig.inconsistentLevel,
    defaultMenuConfig.priceRange,
    seed,
  );
  const response: MenuResponse = { menu: menu };
  return Response.json(response);
}
