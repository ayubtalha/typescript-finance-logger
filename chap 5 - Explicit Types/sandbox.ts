// EXPLICIT TYPES
let charac: string;
let agee: number;
let isBoolean: boolean;

agee = 23;
// agee = "23"

// ARRAYS
let ninjas: string[];

// ninjas.push('khan');

// UNION TYPES
let mixed: (string | number)[] = [];
mixed.push(23, 'Talha');
console.log('mixed:', mixed);

let uuid: string | number;

// OBJECTS
let ninjaOne: object;
ninjaOne = { name: 'Talha', age: 27 };

let ninjaTwo: {
  name: string;
  age: number;
  beltcolor: boolean;
};

ninjaTwo = { name: 'Talha', age: 27, beltcolor: true };
console.log(ninjaTwo);
