// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `This ${this.client} ownes ${this.amount} which is ${this.details}`;
  }
}

const invOne = new Invoice('Talha', 'Money', 400);
const invTwo = new Invoice('Khan', 'Payment', 500);
console.log(invOne.format());
console.log(invTwo.format());

let arr: Invoice[] = [];
arr.push(invOne);
arr.push(invTwo);

console.log(arr);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
