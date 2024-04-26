"use strict";
const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
const numberValue = 123;
function add(num1, num2) {
    return num1 + num2;
}
let thisThing = 12;
let thatThing = "twelve";
let function1;
function1 = (name, age) => {
    console.log(`My name is {name} and age is ${age}`);
};
const form = document.querySelector(".new-item-form");
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
