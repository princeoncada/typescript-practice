import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { Person } from './interfaces/Person.js';

// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});

const john: Person = {
    name: 'John',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
}

interface Resource<T, K> {
    uid: number;
    resourceType: T,
    data: K;
}

const docOne: Resource<string, object> = {
    uid: 1,
    resourceType: 'person',
    data: { name: 'John' }
}

const docTwo: Resource<string, string[]> = {
    uid: 2,
    resourceType: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
}

function getResource<T, K>(uid: number, resourceType: T, data: K) {
    return {
        uid,
        resourceType,
        data
    }
}

const docThree = getResource<string, object>(3, 'person', { name: 'John' });