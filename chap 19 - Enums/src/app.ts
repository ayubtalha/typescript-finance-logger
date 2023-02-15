import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

// ------------------------
// GENERICS
// ------------------------

// const addUID = <T extends object>(obj: T) => {
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'Talha', age: 27 });
// let docTwo = addUID('Hi');

console.log(docOne.name);
// console.log(docTwo);

// ------------------------
// ENUMS
// ------------------------

enum ResourceType {
  BOOK,
  AUTHOR,
  HERO,
  PRODUCER,
}

interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'Name of wind' },
};

const docFour: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.HERO,
  data: { title: 'clash of titans' },
};

console.log(docThree, docFour);