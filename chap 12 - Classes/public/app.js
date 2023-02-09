"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
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
let arr = [];
arr.push(invOne);
arr.push(invTwo);
console.log(arr);
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
