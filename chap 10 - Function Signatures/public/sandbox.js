"use strict";
// let greet = Function
// EXAMPLE 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} ${greeting}`);
};
greet('Talha', 'Hello');
// EXAMPLE 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(6, 4, 'minus'));
// EXAMPLE 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
