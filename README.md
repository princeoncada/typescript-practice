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

