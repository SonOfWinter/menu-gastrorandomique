// @vitest-environment node
import { NextRequest } from 'next/server';
import { describe, expect, it } from 'vitest';
import { GET } from '@/app/generate/route';
import generateMenu from '@/lib/generate-menu';

describe('GET /generate', () => {
  it.each([
    ['', 0],
    ['&inconsistentLevel=0', 0],
    ['&inconsistentLevel=10', 10],
    ['&inconsistentLevel=20', 20],
    ['&inconsistentLevel=-1', 0],
    ['&inconsistentLevel=21', 0],
    ['&inconsistentLevel=10.5', 0],
    ['&inconsistentLevel=10oops', 0],
    ['&inconsistentLevel=1e1', 0],
  ] as const)('handles query suffix %j as level %d', async (suffix, level) => {
    const request = new NextRequest(
      `http://localhost/generate?seed=0&themes=1${suffix}`,
      { headers: { 'x-real-ip': `test-${suffix}` } },
    );

    const response = await GET(request);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      menu: generateMenu(undefined, level, undefined, 0, true),
    });
  });
});
