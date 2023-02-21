const numbers = [12, 15, 16, 18, 20, 30, 40, 50, 60, 55];
const bigNums = numbers.filter((number) => number > 20);
const tiny = numbers.filter((n) => n < 20);
const even = numbers.filter((num) => num % 2 === 0);
console.log(bigNums);
console.log(tiny);
console.log(even);
