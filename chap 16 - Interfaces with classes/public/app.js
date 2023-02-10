import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('talha', 'work on the talha project', 250000);
docTwo = new Payment('talha', 'work on the talha project', 250000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const me = {
    name: 'Talha',
    age: 27,
    speak(language) {
        console.log(language);
    },
    spend(money) {
        console.log(money);
        return money;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log('hello', person);
};
greetPerson(me);
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, /* inv.details,*/ inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log('DOC:', doc);
});
