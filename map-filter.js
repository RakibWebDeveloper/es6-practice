// const number = [1, 2, 4, 5, 6, 7];

// const output = [];

// for (let i=0; i< nums.length; i++) {
//     const element = i * i;
//     output.push(element);
// }
// console.log(output);


// const res = number.map(el => {
//     return el * el;
// });

// console.log(res);

// const res = number.filter(x => x < 5);
// console.log(res);
// console.log(number);


// const res = number.find(x => x < 1);
// console.log(res);
// console.log(number);

const number = [1, 2, 4, 5, 6, 7];

// function func(id) {
//     console.log("hey", id);
// } 

// greetings = number.forEach(id => func(id));

const sum = number.reduce((a, c) => (a + c), 10);
console.log(sum);
