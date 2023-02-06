let greet: Function;

greet = () => {
  console.log('Hello Gee');
};

greet();

const add = (a: number, b: number, c: string | number = 'K'): void => {
  console.log(c, a + b);
};

add(4, 6);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(5, 6);
console.log(result);
