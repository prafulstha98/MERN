//check  if a number is even or odd
let number = 7;
if (number % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

//age checker: write a program to determine if someone is a child, teenager, adult, or senior citizen based on their age.
let age = 25;
if (age < 13) {
  console.log("You are a child");
} else if (age <= 19) {
  console.log("You are a teenager");
} else if (age <= 25) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
}

//largest of three numbers: write a program that takes three numbers as input and determines which one is the largest
let num1 = 55;
let num2 = 67;
let num3 = 76;
if (num1 > num2 && num1 > num3) {
  console.log(num1, "is the largest number");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2, "is the largest number");
} else {
  console.log(num3, " is the largest number");
}

//leap year checker: write a program to check if a given year is a leap year (Hint: A year is a leap year if it is divisible by 4 but not divisible by 100, except when it is also divisible by 100)

let year = 2024;
if (year / 4 == 0 || year / 100 != 0 || year / 400 == 0) {
  console.log(year, " is a leap year");
} else {
  console.log(year, " is not a leap year");
}

//check number is odd or even with strictly used comparison operators
let num = "9";
if (num % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

//to check if a number is multiple of 400 using function
let number1;
function checkOddorEven(number1) {
  if (number1 % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkOddorEven(2001));
