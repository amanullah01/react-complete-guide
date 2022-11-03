//spread operator
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

let person = { username: "aman" };
let personWithAge = { ...person, age: 40 };
console.log(personWithAge);

//rest operator
const sort = (...numbers) => numbers.sort((a, b) => a - b);
console.log(sort(1, 3, 4, 2, 30, 24));
