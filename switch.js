//switch case statement
const gender = "female";

switch (gender) {
  case "male":
    console.log("Hello male");
    break;

  case "female":
    console.log("Hello female");
    break;
}

//Calculator using switch statement
let a = 90;
let b = 100;
const calc = "add";
switch (calc) {
  case "add":
    console.log(a + b);
    break;

  case "substract":
    console.log(a - b);
    break;

  case "multiply":
    console.log(a * b);
    break;
  case "divide":
    console.log(a / b);
    break;

  default:
    console.log("invalid operation");
}
