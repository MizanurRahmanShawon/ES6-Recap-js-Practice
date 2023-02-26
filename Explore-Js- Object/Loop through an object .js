const number = [12, 20, 50, 60];
// for (const number of numbers) {
//   console.log(number);
// }
// 1... For of can not used with object
const bottle = { color: "red", price: 400, isClean: true, capacity: 1 };
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
/**
 * way to read object propertues
 * bottle.color
 * bottle['color]
 * bottle[key]
 */
for (const key of keys) {
  //   console.log(key, bottle[key]);
}

// For in Loop
for (const key in bottle) {
  const value = bottle[key];
  //   console.log(key, bottle[key]);
}
// Advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
