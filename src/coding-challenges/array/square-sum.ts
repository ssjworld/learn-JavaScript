export const squareSum = (numbers: number[]): number => {
  return Array.isArray(numbers) && numbers.length ?
    numbers.reduce((accumulator, currentValue) => accumulator + Math.pow(Number.isFinite(currentValue) ? currentValue : 0, 2), 0) : 0;
}
