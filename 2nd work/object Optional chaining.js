// const users = [{ id: 1, name: "abul", job: "doctor" }];
// console.log(users[0].name);

const data = {
  count: 5000,
  data: [
    { id: 1, name: "babul", job: "leader" },
    { id: 2, name: "kabul", job: "leader" },
  ],
};
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
  id: 5001,
  name: "albart mog",
  address: {
    streat: {
      first: "35/A mohakhali",
      second: "second floor",
      third: "left side",
    },
    postOffice: "cantonment",
    city: "dhaka",
  },
};
const userFloor = user.address.streat.second;
console.log(userFloor);
