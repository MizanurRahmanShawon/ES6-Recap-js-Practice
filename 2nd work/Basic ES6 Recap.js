// var let const
const number = [12, 20, 30, 40];
let salary = 450;
salary = 455;

// default paramiter
function calculateSalary(salary, tax = 0.25, bonus = 0) {
  const remaining = salary - salary;
  const total = remaining + bonus;
  return total;
}
// template string

const elementHTML = `
<div>
<h3>Name:</h3>
<h3>Address:</h3>
<h3>Salary: ${calculateSalary(100000, 0, 0)}</h3>
<h3>Others: ${number[2]}</h3>
</div>
`;

// Arrow Function
const doblelt = (x) => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;
// Spread
const ages = [11, 12, 13, 50, 80];
const newAges = [...ages, 22, 23, 50];

// destructuring

const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: "sakib", salary: 4000 };
const [a, b, ...r] = [12, 20, 30, 40];
