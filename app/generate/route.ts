function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export type MenuDemo = {text: string, random: string};

const generateRandomString = (length:number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export async function GET():Promise<Response> {
  await sleep(2000);
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum molestie mattis. Integer mattis, dolor nec elementum vulputate, magna magna vehicula est, finibus ornare nulla orci ac libero. Fusce iaculis tincidunt scelerisque. Nulla sed nunc eu augue euismod malesuada. Donec sodales ex eu purus rutrum cursus. Donec mollis lorem nec elit congue laoreet. Sed orci metus, consequat non semper eget, dignissim sed eros. Integer eget est odio. Nullam nisl turpis, vestibulum sed fermentum eget, pretium in erat.";
  return Response.json({ text: text, random: generateRandomString(10) });
}
