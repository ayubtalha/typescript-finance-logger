import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('talha', 'work on the talha project', 250000);
docTwo = new Payment('talha', 'work on the talha project', 250000);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

interface InPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: InPerson = {
  name: 'Talha',
  age: 27,
  speak(language: string): void {
    console.log(language);
  },
  spend(money: number): number {
    console.log(money);
    return money;
  },
};

console.log(me);

const greetPerson = (person: InPerson) => {
  console.log('hello', person);
};

greetPerson(me);

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, /* inv.details,*/ inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log('DOC:', doc);
});
