// if you auto make variable, it would be a specific object with same k-v pairs
const person = {
  name: "Anthony",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// you can also specifically assign manually, but only do this if needed
// above is better syntax
// const person2: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: "Anthony",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// note that array.push would still work even if you specify type as fixed-length array



const person3 = {
  name: "Anthony",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person3.role);
