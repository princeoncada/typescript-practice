# TypeScript Learnings

This repository contains my notes and examples from watching a [TypeScript Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI) Series on YouTube. Below are the key concepts and code snippets that illustrate the fundamentals of TypeScript as covered in the videos.

### Compiling TypeScript
- Compile a TypeScript file to Javascript using:
```
tsc {typescript filename}
```
- To automatically compile files:
```
tsc {typescript filename} -w
```

### Basic Types
- Declare types explicitly:
```
const variable_name: number = 1;
```
>#### Arrays
>- Single type arrays:
>```
>let arr1: number[] = [1, 2, 3];
>let arr2: string[] = ["one", "two", "three"];
>```
>- Mixed types arrays:
>```
>let arr3: (number|string)[] = [1, "two", 3];
>```
>
>#### Objects
>- Declared objects with strict type checking:
>```
>let object: {
>   name: string,
>   age: number,
>   beltColour: string,
>   isPresent: boolean
>};
>```
>
>#### Union Types
>- Use union types to allow multiple types for variables:
>```
>let mixedArr: (string|number|boolean)[];
>let uid: string|number;
>```

### Dynamic Type: `any`
- Use `any` for a variable that can hold any type:
```
let dynamicVar: any;
```

### TypeScript Configuration
- Initialize a TS project configuration file:
```
tsc --init
```
- Set directories for source and compiled output:
```
{
    "rootDir": "./src",
    "outDir": "./public",
},
"include": ["src"]
```

### Functions
- Specify parameters and return types:
```
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

### Type Aliases
- Create reusable type definitions:
```
type StringOrNum = string | number;
```

### Function Signatures
- Define the structure of a function:
```
let calculate: (x: number, y: number) => number;
calculate = (a, b) => a + b;
```

### Class-based Features
- Basic class structure:
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

### Access Modifiers
- Use `private`, `public`, or `readonly` to control access to class members:
```
class Invoice {
  constructor(
      public client: string,
      private details: string,
      readonly amount: number
  ) {}
}
```

### Modules
- `Import` and `export` classes:
```
// Exporting
export class Invoice {}
// Importing
import { Invoice } from './classes/Invoice.js';
```

### Interfaces
- Define a contract for `classes` or `objects`:
```
interface Person {
  name: string;
  age: number;
  speak(words: string): void;
  spend(amount: number): number;
}
```

### Generics
- Use `generics` to create `components` that work with various types:
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
- Apply constraints to `generics`:
```
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

### Enums
- `Enums` or `enumerations` allows for defining a set of named constants. 

>#### Numeric Enums
>```
>enum Direction {
>  Up = 1,
>  Down,
>  Left,
>  Right
>}
>```
>- Up is initialized with 1. All following members are auto-incremented from that point on. In this example, Down will be 2, Left will be 3, and so on.
>
>#### String Enums
>```
>enum Direction {
>  Up = "UP",
>  Down = "DOWN",
>  Left = "LEFT",
>  Right = "RIGHT"
>}
>```
>- `String` `enums` do not auto-increment and each member must be initialized with a string value.
>
>#### Accessing Enums
>```
>let dir: Direction = Direction.Up;
>```
>- `Enums` are useful when you need a set of options whose values are known at compile time.

### Tuples
- `Tuples` allow you to express an array with a fixed number of elements whose types are known

>#### Basic Tuple
>```
>let person: [string, number];
>person = ["John", 35];  // Correct
>person = [35, "John"];  // Error: Type 'number' is not assignable >to type 'string'.
>```
>- Here, `person` is a tuple where the first element is a `string` and the second is a `number`.
>
>#### Tuples with Optional Elements
>```
>let address: [string, number, string?];
>address = ["Park Lane", 123];  // OK
>address = ["Park Lane", 123, "Optional Additional Info"];  // Also >OK
>```
>- `Tuples` can have optional elements, denoted by the `?`. This makes the element at that position optional.
>
>#### Rest Elements in Tuples
>```
>let scores: [string, ...number[]];
>scores = ["Math", 98, 97, 85];
>scores = ["English"];
>```
>- This `tuple` expects a `string` as the first element, followed by any `number` of number types, denoted by `...number[]`.