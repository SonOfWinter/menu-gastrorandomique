export default function round(number: number, precision: number = 0): number {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
