// Constant


const hubby = "X";

// hubby = "Y";     cant do that

console.log(hubby);

const numbers = [45,12,5,6,9,9,5];

// We can add remove push pop in const variable
// But we cant assign value in a const

numbers[0] = 100;

numbers.push(99);

// numbers = ["x", "y", "z", "a", "b"];    cant do that
console.log(numbers);

const nayok = {
    name: "Sakib",
    phone_no: "016258"
}


console.log(nayok);


// Let it is block scoped

let patientName = "Rakib";
patientName = "Sad";
console.log(patientName);

for (let i=0; i< 10; i++) {
    console.log(i);

}

// Var  it is function scoped


for (var i=0; i< 10; i++) {

}

console.log(i);

