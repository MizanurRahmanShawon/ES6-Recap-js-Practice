const student = {
  name: "Kamal",
  money: 5000,
  study: "math",
  subjects: ["calculus", "algebra", "geometry"],
  exam: function () {
    return this.name + "is participating in an exam";
  },
  improveExam: function (subjects) {
    this.exam();
    return `${this.name}is takeing improvement exam on ${subjects}`;
  },
  treatDay: function (amount) {
    this.money = this.money - amount;
    return this.money;
  },
};
const output = student.exam();
// console.log(output);
const reExam = student.improveExam("calculus");
// console.log(reExam);
const remaining = student.treatDay(800);
console.log(remaining);
