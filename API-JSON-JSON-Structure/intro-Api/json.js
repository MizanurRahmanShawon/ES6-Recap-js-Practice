const user = { id: 1, name: "Gorib Aamir", job: "actor" };
// Javascript object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  owner: "nirob",
  address: {
    street: "bomgomata hall",
    city: "ranibir",
    country: "BD"
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: False
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
