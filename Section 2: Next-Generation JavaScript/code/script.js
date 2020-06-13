// ../FeaturesDescriptionText.pdf is the reference listed all next-gen features

/***   1. var, let, const   ***/
let somevar = 1;
let someanothervar = 'aa';
const anyvar = 'immutable value';

/***   2. Arrow functions   ***/
const myFunc = (param) => {
    console.log('Parameter of arrow function ' + param);
};
const myFuncOneLiner = () => console.log('One line function');

/***   3. Export and imports ***/
// Named: import value under the name defined on export

// export const something = 'value for export';
// import {a, b} from "./dumbImportExamples.js";
// import {d as dumbValue} from "./dumbImportExamples.js";
// console.log(a, b, dumbValue);
// import * as bundle from "./dumbImportExamples.js";

// Default: import exported value with any name you want

// export default myFunc;
// import superImportantConst from "./dumbImportExamples.js";

/*** 4. Classes, methods, properties ***/
class MyAncestorClass {
    constructor(a, b) {
        this.a = "Default A"
    }

    printA(){
        console.log('Value of property A (in base class) ' + this.a);
    }
}
class MyClass extends MyAncestorClass{
    constructor(a, b) {
        // this.a = a;
        super();
        this.b = b;
    }

    printB(){
        console.log('Value of property B (in child class) ' + this.b);
    }
}

// New ES7 style class
class MyES7Class extends MyAncestorClass{
    b = 'default B';

    printB = () => {
        console.log('Value of property B (in child class) ' + this.b);
    }
}

const myObject = new MyClass("Alpha", "Beta");
myObject.printA();
myObject.printB();

/***   5. Spread & Rest ***/
// ... - used to spread/rest (scatter/gather) elements of an array/object

// Spread
const basic = [1, 2, 3]
const extended = [...basic, 5, 6]
console.log(extended);

const person = {
    name: "Art"
}
const anotherPerson = {
    ...person,
    drawImage: 28
}
console.log(anotherPerson);

// Rest
const restFunc = (...args) => {
    console.log(args);
}
restFunc('I ', 'know ', 'it\'s ', 'weird!');

const filter = (...args) => { return args.filter(el => el === 1) }
console.log(filter(1, 2, 4, 17, 1, 22))

/*** 6. Destructuring ***/
// Easily extract particular array elements or object properties and store them in variables

// let numbers = [1, 2, 3]
// [num1, , num3] = numbers;
// console.log(num1);
// console.log(num3);

// {name} = {name: 'Art', age: 29}
// console.log(name);
// console.log(age);

/*** 7. Reference and Primitive types ***/
// Primitive types (numbers, strings, booleans): copies the exact value
let a = 7
let b = a;
a = 17;
console.log(a);
console.log(b);

// Reference types (arrays, objects): copy the reference/link to cell in memory
let originalArr = [1, 2, 3]
let originalObj = {name: "Art"}

let copyArr = originalArr;
let copyObj = originalObj;

originalArr[0] = "A";
originalObj.name = "NoName";
console.log(copyArr);
console.log(copyObj);

// Immutable copy - copy only properties of object, not the object itself - done with spread

let copyObj2 = {...originalObj};
originalObj.name = "Reverted to Art";
console.log(copyObj2);

/*** 8. Array functions ***/
const  numbers = [1, 2, 3]
const doubledNumArray = numbers.map(x => x*2);
console.log(doubledNumArray)


