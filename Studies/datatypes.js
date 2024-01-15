/**
 * 0) Data Types: Data types define the type of values that variables can hold. They specify the nature of the data and the operations that can be performed on it.
 * 
 * 1) Number: Represents whole numbers without any fractional part.
 * 
 * 2) String: Represents a sequence of characters.
 * 
 * 3) Boolean: Represents true or false values. Used for logical operations.
 * 
 * 4) Array: Represents an ordered collection of values. Elements in an array can be of the same or different data types.
 * 
 * 5) Object: Represents a collection of key-value pairs. Each key is a string, and values can be of any data type.
 * 
 * 6) Function: Represents a reusable block of code that performs a specific task. Functions can also have a return value. 
 * 
 * 7) Undefined: Represents a variable that has been declared but not assigned any value.
 * 
 * 8) Null: Represents the absence of a value or a variable with no value assigned.
 * 
 * 9) NaN: Stands for "Not a Number," and it is a special value to represent the result of an undefined or 
 *      unrepresentable mathematical operation, particularly operations involving floating-point arithmetic.
 * 
 * 10) Infinity and -infinity: Special numerical values also, representing positive infinity and negative infinity,
 * 
 * 11) What is the difference between primitive/simple and complex data types? primitive data types are simple, immutable values that are stored directly, 
 * while complex data types are structures that can hold multiple values, are often mutable, and are stored by reference.
 * 
 * 12) Primitive values are passed to a function by COPY, complex values are by REFERNCE. What does that mean, and how are they different? 
 * "passed by copy" means a copy of the actual value is sent to the function, and modifications inside the function do not affect the original value.
 * "Passed by reference" means a reference to the original data is sent to the function, and changes inside the function directly affect the original data outside the function.
 * 
 */

// 1) Numbers
let age = 25;
let temperature = 30.5;

// 2) String
let name = "John Doe";
let message = 'Hello, World!';

// 3) Boolean
let isStudent = true;
let hasLicense = false;

// 4) Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

// 5) Object
let person = {
    name: 'Alice',
    age: 30,
    isStudent: false
  };

// 6) Function
function greet(name) {
    console.log("Hello, " + name + "!");
  }

// 7) Undefined
let time;

console.log("Time:", time); // Age: undefined

// 8) Null
let nullVar = null;

// 9) NaN
let result = "Hello" * 5;

console.log("Result:", result); // Result: NaN

// 10) Infinity and -infinity
// Positive Infinity
let positiveInfinity = 1 / 0;

console.log("Positive Infinity:", positiveInfinity);

// Negative Infinity
let negativeInfinity = -1 / 0;

console.log("Negative Infinity:", negativeInfinity);