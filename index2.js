//create a function that finds average rating of given array

const ratings = [1, 6, 7, 78, 8, 32, 7, 7, 27, 2, 6];

//hint: total/ array length

console.log(`The length of the given array is ${ratings.length}`);

const clothes = [];
console.log(`The length of the second array is ${clothes.length}`);

const avgCalc = (ratings) => {
  const total = ratings.reduce((a, b) => a + b);
  return total / ratings.length;
};

const rating = avgCalc(ratings);
console.log(rating);
console.log(Math.floor(rating));

const m = new Set([10, 20, 30, 40, 50, 560]);
m.forEach((n) => {
  console.log(n);
});
console.log(m);
