# Notes

- typescript is not directly used and is compiled using `tsc` `{typescript filename}` or you can specify the javascript file to modify `tsc` `{typescript filename}` `{javascript filename}`
- to avoid constantly having to run `tsc` to compile typescript files into javascript, simply include the tag -w (`tsc` `{typescript filename}` `-w`)
- define the type of variable names explicity
```
const variable_name: number = 1;
```
- there are single type arrays and mixed type arrays
```
let arr1 = [1, 2, 3]; // single type array of numbers
let arr2 = ["one", "two", "three"]; // single type array of strings
let arr3 = [1, "two", 3]; // mixed type array of numbers and strings
```
- objects are more strict meaning modifications are only allowed based on the initial values and types
- you can explicitly declare union types:
```
let mixedArr: (string|number|boolean)[];
let uid: string|number;
```
- you can also do it with objects
```
let object: {
    name: string,
    age: number,
    beltColour: string,
    isPresent: boolean
};
```
- there is a dynamic type `any`
- easy way to manage `typescript` processes is to run `tsc --init` to initialize a json configuration file
- set `rootDir` and `outDir` to specify the root folder and output folder
- add the following to the configuration to only include everything in src for compiling
```
"include": ["src"]
```
- you can also explicitly specifiy the data type of function parameters and its return type
```
function add(param1: number, param2: number): number{
    return param1 + param2;
}
```
- you can create `type aliases` to be used for explicit typing
```
type StringOrNum = string | number;
let thisThing: StringOrNum = 12;
let thatThing: StringOrNum = "twelve";
```
- similar to creating types you can create `function signatures` for functions
```
let function1: (a: string, b: number) => void;
function1 = (name: string, age: number) => {
    console.log(`My name is {name} and age is ${age}`);
}
```
- typescript does not have access to external files at runtime leading to the need to use of runtime check using `if-statements` or `! operator` ( used when a value is certainly present )
- you can do type casting by adding `as {data type}` to an expression
```
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
```
- typescript creates classes similar to `Kotlin` where there is inital `variables`, `constructors`, and `methods`
```
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
```
- you can use created `classes` for `type` declarations
```
const arr: Invoice[] = [];
```
- variables and methods can be modified with `private`, `public`, and `readonly` access modifiers
- if variable is created together with access modifiers you can directly put it inside the constructor directly with initializing
```
class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
```
- for module systems, keep 2 things in mind, add `export` after the `class` keyword and then retrieve it by referencing the `.ts` file as `.js`
```
export class Invoice() {}
----------------------------------------------------------------
// different directory
import { Invoice } from './classes/Invoice.js';
```
- you can setup `interfaces` with similar structure to `Kotlin`
```
interface Person {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}
```
- `interfaces` is simply the same as `Kotlin` or `Java`
- `typescript` also makes use of `generics`
- `generics` on `functions`, `interfaces`, and `classes`
```
function identity<T>(arg: T): T {
    return arg;
}

interface GenericIdentityFn<T> {
    (arg: T): T;
}

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
```
- `constraints` can also be specified on `generics`
```
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity({length: 10, value: 3});
```