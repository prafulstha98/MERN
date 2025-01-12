//2 ways to declare a function

//parameters inside function and arguments while calling the  function

//make a function that calculate total of numbers

// function total(numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total = total + numbers;
//   }
//   return total;
// }
// const numbers = [10, 20, 30, 40, 50];

// const total = total(numbers);
// console.log(total);

//finding the total of numbers using array reduce method
// const calcTotal = (numbers, age) => {
//   return numbers.reduce((a, b) => a + b);
// };

// const m = calcTotal([10, 20, 30, 40, 50], 88);

// console.log(m);

//function to greet a person
// const greetPerson = (personName, greetType) => {
//   console.log(`${greetType} ${personName}`);
// };

// greetPerson("shyam", "hello");

// greetPerson("ram", "hi");

// 1. Write a function `addTwoNumbers` that takes two numbers as parameters. How can you return their sum?

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

//this is an argument stored inside result variable

// 3. Create a function `sayHello` that takes a name as an argument. How can you make it return "Hello, [name]!"?

const sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

sayHello("hari");

const parent = (childFunc) => {
  childFunc();
};

const childFunc = () => {
  console.log("hello i am child function");
};

parent(childFunc);

//create a function that creates average rating of array
const ratings = [1, 2, 3, 4, 5, 4, 3, 2, 4, 5, 5, 5, 4, 3, 5, 5, 5];
// avg rating

// total / array length
const avgCalc = (ratings) => {
  const total = ratings.reduce((a, b) => a + b);
  return total / ratings.length;
};
const rating = avgCalc(ratings);
console.log(Math.floor(rating));

// Here are some JavaScript function exercises for students:
// Basic Function Exercises

//     Write a function greet that takes a name as a parameter and returns a greeting message.
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Hari Das"));
//     Create a function add that takes two numbers as parameters and returns their sum.

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(6, 7));

//     Write a function isEven that checks if a number is even.
function isEven(even) {
  if (even % 2 === 0) {
    console.log(`${even} is even`);
  } else {
    console.log(`${even} is odd`);
  }
}

isEven(55);

//Create a function square that takes a number and returns its square.
function square(sqrt) {
  return Math.pow(sqrt, 2);
}

console.log(square(5));

//Write a function toUpperCase that takes a string and returns it in uppercase.

function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(toUpperCase(`hello`));

// Write a function countVowels that counts the number of vowels in a given string.
function countVowels(vowels) {
  const Vowels = `aeiouAEIOU`;

  let count = 0;
  for (let char of vowels) {
    if (Vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("HelloO"));

// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   // Return the count of vowels
//   return count;
// }

const a = [11, 44, , 6, 6, 5, 45, 1];
const b = [11, 44, , 6, 6, 5, 45, 1];

const unique = [];

const m = new Set([11, 22, 33, 44, 55]);

m.forEach((n) => {
  console.log(n);
});
