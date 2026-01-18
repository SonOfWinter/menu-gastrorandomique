function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET() {
  await sleep(2000);
  return Response.json({ message: 'Hello World' });
}
