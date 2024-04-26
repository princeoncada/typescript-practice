const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

const numberValue: number = 123;

function add(num1: number, num2: number): number {
    return num1 + num2;
}

type StringOrNum = string | number;
let thisThing: StringOrNum = 12;
let thatThing: StringOrNum = "twelve";

let function1: (a: string, b: number) => void;
function1 = (name: string, age: number) => {
    console.log(`My name is {name} and age is ${age}`);
}
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});

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
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const arr: Invoice[] = [];