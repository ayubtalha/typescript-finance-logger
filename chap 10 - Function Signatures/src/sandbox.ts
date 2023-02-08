// let greet = Function

// EXAMPLE 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} ${greeting}`);
};
greet('Talha', 'Hello');

// EXAMPLE 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string): number => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};
console.log(calc(6, 4, 'minus'));

// EXAMPLE 3
let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
