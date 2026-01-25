export default function random(min: number, max: number, floating?: boolean): number {
  if (floating || min % 1 !== 0 || max % 1 !== 0) {
    const rand = Math.random();
    return Math.min(min + rand * (max - min + Number.EPSILON), max);
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
