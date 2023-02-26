// create object using literals
const player = {};
player.name = "Small Shawon";
player.specialty = "batsman";
player.bat = function () {
  console.log("swing your bat");
};
// console.log(player);
// player.bat();

const student = {
  name: "Moja",
  job: "Devoloper",
  ball: function () {
    console.log("throw the ball");
  },
  salary: 100000,
};

// 2-Object Constructor
const person = new Object();
console.log(person);
// 3-Object Create
// const item = object.create(null);
const atel = Object.create(student);
console.log(atel.name);

// 4- Class
// class person1 {
//   name = "abul";
//   address = "singapur";
//   constructor(age) {
//     this.age = age;
//   }
// }
// const person1 = new person(56);
// console.log(person1);
// 5- Function
function car(model, price) {
  this.model = model;
  this.model = price;
}
const tesla = new car("elon", 32);
