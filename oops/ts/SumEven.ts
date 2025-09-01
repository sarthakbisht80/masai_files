function sumEvenNumbers(arr: number[]): number {

  const evenSum = arr
    .filter(num => num % 2 === 0) 
    .reduce((acc, num) => acc + num, 0); 

  return evenSum;
}