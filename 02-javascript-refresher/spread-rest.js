//spread operator
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

let person = { username: "aman" };
let personWithAge = { ...person, age: 40 };
console.log(personWithAge);
