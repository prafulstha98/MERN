// primitive types ... reference types
// string, bool, number ,undefined, null
// object, array, function

let personName = "earl";
let personAge = 25;
const gis = 9000;

console.log(personName.toUpperCase());
console.log(personName.length);
console.log(personName.indexOf("i"));
console.log(personName.charAt(0));

const m = personName.concat("jhjkhjk");
console.log(personName + "kjhjhjk");

console.log(personName.includes("rl"));

console.log(m.repeat(2));


//leap year: write a program to check if a given year is a leap year
let year = 2100;
if(year % 400 === 0){
    console.log(year,"is a leap year");
}else if(year % 100 === 0){
    console.log(year,"is not a leap year");
}else if(year % 4 === 0){
    console.log(year, "is a leap year");
}else{
    console.log(year, "is not a leap year");
}