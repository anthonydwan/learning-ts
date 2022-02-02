const add = (n1: number, n2: number) => n1 + n2;

// only assign type to the variable if you do not have the value
let number1: number;
number1 = 5;
const number2 = 2.3;

const results = add(number1, number2);
console.log(results);
console.log("Hi");
