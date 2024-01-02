/**
 * Variables
 * 
 * 
 * 0: variable are containers for data in JavaScript. We can create variables using declarative keywords...Variables are named identifiers that point to values like string, 
 * object, arrays, numbers, boolean, or another datatype. Variables can also be reassign.
 * 
 * 1: declartion and Assignment: to create variables in JavaScript, we must first declare it by using one of three keywords.
 * 
 * 2: var, let, and const: var, let, and const are the three declaritive keywords.
 *          1) var: declare variables. Can be reassign, lobal, local, redeclared, and can be initialized without a value.
 *          2) let: let provides block-scope for variables as opposed to the function scoping var. Can be reassign, block, redeclared, and can be initialized without a value
 *          3) const: const is used to declare a variable, but with the key characteristic that the variable's value cannot be reassigned once it has been initialized.
 *                    Can't reassign and block.
 * 
 * 3: Hoisting: Hoisting is a behavior in JS where variable and function declartions are moved to the top of their containing scope during the compilation phase. Can use variables
 * functions before they are delcared in the code. 
 */

// 1. declartion and assignments

// declartion
// undefined because cloths is not assigned
var cloths;
console.log(cloths)

// assignment
// cloths is now assign
cloths = "hoodie";

// 2: var, let, and const

// var
// var is declaring age
var age;
// let
// let is declaring x
let x = 5;
console.log(x);
// const
// const is declaring person
const person = { name: 'John', age: 30 };
person.age = 31;

// 3. hoisting
// variable hoisting
console.log(y); 
var y = 5;
console.log(y);
// function hoisting
sayHello(); // Outputs: "Hello!"
function sayHello() {
  console.log("Hello!");
}