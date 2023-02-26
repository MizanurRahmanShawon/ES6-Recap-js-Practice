const third = second;
// if (third === second) {
//   console.log("they are some");
// } else {
//   console.log("different");
// }

// short cut object and array not used this method
const first = { a: 2, b: 10, c: 15 };
const second = { a: 6, b: 14, c: 17 };
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);
// if (firstString === secondString) {
//   console.log("same");
// }
// else {
//     console.log('different')
// }
function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys === secondKeys) {
    return true;
  } else {
    return false;
  }
}
const isSame = compareObject(first, second);
console.log(isSame);
