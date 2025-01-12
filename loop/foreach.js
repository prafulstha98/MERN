// const simpleData = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 30,
//     gender: "male",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     age: 25,
//     gender: "female",
//   },
//   {
//     id: 3,
//     name: "Bob Smith",
//     age: 35,
//     gender: "male",
//   },
//   {
//     id: 4,
//     name: "Alice Johnson",
//     age: 28,
//     gender: "female",
//   },
// ];

// const males = simpleData.filter((person) => person.gender === "male");
// console.log(males);

// const singleData = simpleData.filter((person) => person.id === 1);

// console.log(singleData);

//difference betweeen primitive types and reference types

//primitype types
// reference types

let age = 90;
let b1 = age;

age = 100;

console.log(age);

let person = {
  age: 445,
};
const b = person;
person.age = 155;

console.log(b);
