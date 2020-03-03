// function doubleIt(num) {
//     return num*3
// }

// const res = doubleIt(5);
// console.log(res);


const doubleIt = num => num*3;
console.log(doubleIt(3));


const sum = (a, b) =>  a + b;


const res = sum(1,2);
console.log(res);


const greetings = () => "hi, guys!!!"
console.log(greetings());

const dOMath = (x,y) => {
    const a = x + y;
    const moreSum = a + x;
    const diff = x - y;
    const res = a + moreSum + diff;
    return res;
}

console.log(dOMath(1, 2));

