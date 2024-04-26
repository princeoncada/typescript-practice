import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// Form
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
const john = {
    name: 'John',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const docOne = {
    uid: 1,
    resourceType: 'person',
    data: { name: 'John' }
};
const docTwo = {
    uid: 2,
    resourceType: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
};
function getResource(uid, resourceType, data) {
    return {
        uid,
        resourceType,
        data
    };
}
const docThree = getResource(3, 'person', { name: 'John' });
