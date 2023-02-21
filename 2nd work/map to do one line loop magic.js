const numbers = [2, 4, 5, 6, 8];

function getDoubles(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doublelt(number);
    output.push(doubled);
  }
  return output;
}

function doublelt(number) {
  return number * 2;
}
const result = getDoubles(numbers);
console.log(result);
