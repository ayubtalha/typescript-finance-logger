"use strict";
let greet;
greet = () => {
    console.log('Hello Gee');
};
greet();
const add = (a, b, c = 'K') => {
    console.log(c, a + b);
};
add(4, 6);
const minus = (a, b) => {
    return a + b;
};
let result = minus(5, 6);
console.log(result);
