// const users = ["haha", "huhu", "bau", "son", "father"];

//adds data to the end of the array
// users.push("water", "mineral");

//removes one element from the back of the array
// users.pop();

// users.shift();
// users.unshift();

//add, remove or replace elemnets of specific position of array
// users.splice(2, 1);

//concat adds extra element to the last element of array
// console.log(users.concat("lio"));

//joins
// console.log(users.join("-"));

//calculates length of array
// console.log(users.length);

//arranges elements of array in alphabetical order
// console.log(users.sort());

//strings are immutable, which means they cannot be changed
// const m = "aloo";
// m[0] = "b";
// console.log(m);

//primitive types: immutable
//reference types: mutable

//array methods
//for in, for of loop

//for showing index of array
// for (let i in users) {
//   console.log(i);
// }

//for printing values of array
// for (let j of users) {
//   console.log(j);
// }

//By using "for of" array method

//total of odd numbers
//filter out odd numbers
// const sumOddNumbers = numbers.filter();
//total of even numbers

// total -- total of Even Number -- total of Odd Number
const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110];
let total = 0;
let sumofEven = 0;
let sumofOdd = 0;

for (let n of numbers) {
  if (n % 2 === 0) {
    sumofEven = n + sumofEven;
  } else {
    sumofOdd = n + sumofOdd;
  }
  total = n + total;
}

console.log("The total value is", total);
console.log("The total value of odd numbers is", sumofOdd);
console.log("The total value of even numbers is", sumofEven);

//for in , for of
// forEach map find filter reduce

// let n = 900;
// let m = n > 20 ? 200 : 300;
// m = m + 90;
// console.log("The value of m is", m);

// (number % 2 === 0 ? evenSum : oddSum) += number;


// (n % 2 === 0 ? evenSum : oddSum) += n;


let n = 900;

90 = 90 + 100;
// let m = n > 20 ? 200 : 300;
// (n > 20 ? 200 : 300) = (n > 20 ? 200 : 300) + 900;

// console.log(m);
// n = n + 90;



// const users = [11, 22, 33, 44, 55, 66, 88];


// let evenSum = 0;
// let oddSum = 0;

// for (let n of users) {

//   (n % 2 === 0 ? evenSum : oddSum) += n;



// }

// console.log(evenSum);