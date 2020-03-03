// Old Version

const age = [11, 19, 14, 16];
const age2 = [14, 25, 65, 25, 8, 5];
const age3 = [24, 45, 25, 55, 48, 15];
const allAges = age.concat(age2).concat(age3).concat([2]);
console.log(allAges);

// Using spread Operator

// if i am not using spread operator
const allAges2 = [age, age2, age3];
console.log(allAges2);

// spread operator
const allAges3 = [...age, ...age2, ...age3];
console.log(allAges3);

// Determine max from age using spread operator

const max = Math.max(...age);
console.log(max);


const words = ["Hello", "Rakib"];
console.log(...words);
