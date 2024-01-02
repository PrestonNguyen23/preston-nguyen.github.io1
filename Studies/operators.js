/**
 * Operators
 * 0. Operators: Operators are special symbols or keywords that perform operations on one or more operands. Operands can be values, variables, or expressions.
 * Operators are fundamental building blocks in programming and are used to manipulate data, perform calculations, and control program flow.
 * 
 * 1. Assignment operators: assign values to variables and perform operations while assigning.
 * 
 * 2. Arithmetic operators: Perform basic arithmetic operations such as addition, subtraction, multiplication, division, remainder, and exponention.
 * 
 * 3. Comparison operators: Compare two values and return a boolean result based on the comparison.
 * 
 * 4. Logical operators: Combine multiple boolean values or expressions and return a boolean result. uses && as logical AND, uses || as logical OR, and uses ! as logical NOT.
 * 
 * 5. Unary operators (!, typeOf, -): Operate on a single operand, which can be a variable, expression, or literal. Unary can use  negation, increment, 
 * decrement, type conversion, and more.
 * 
 * 6. Ternary operators (A ? b : c): A shorthand way of writing an 'if....else' statement. It is represented by the "?" symbol and allows you to make decisions based on a condition.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// 1. Assignment operators
// += Addition
let a = 5;
a += 3; // a = a + 3
// -= Subtraction
let b = 8;
b -= 2; // b = b - 2 
// *= Multiplcation
let c = 4;
c *= 3; // c = c * 4
// /= division
let d = 12; 
d /= 4; // d = d / 4 
// %= Remainder
let e = 7;
e %= 4; // e = e % 4
// **= Exponentiation
let f = 2;
f **= 3; // Equivalent to: f = f ** 3;

// 2. Arithmetic operator
let g = 5;
let h = 3;
let sum = g + h; // Addition
let difference = g - h; // Subtraction
let product = g * h; // Multiplication
let quotient = g / h; // Division
let remainder = g % h; // Modulus
let power = g ** h; // Exponentiation

// 3. Comparsion operator
let x = 10;
let y = 5;
console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to
console.log(x === y); // Equal to (strict equality)
console.log(x !== y); // Not equal to (strict inequality)

// 4. Logical operator
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // Logical AND
console.log(isTrue || isFalse); // Logical OR
console.log(!isTrue); // Logical NOT

// 5. Unary operator
// Unary Plus ('+')
let str = '123';
let num = +str; // converts '123' to the number 123
// Unary Minus('-')
let minus = 5;
let minus2 = -minus; // Negates the value of 'minus', minus2 will be -5
// Increment ('++')
let count = 10;
count++; // Increment count by 1
// Decrement ('--')
let total = 20;
total--; // Decrement total by 1
// Typeof Operator ('typeof')
let message = 'Hello';
console.log(typeof message); // Outputs: "string"

// 6. Terary operator
let isSunny = true;
let weather = isSunny ? 'It is sunny!' : 'It is not sunny.';
console.log(weather); // Outputs: 'It is sunny!'
// Nested ternary Operator
let score = 75;
let result = score >= 70 ? 'Pass' : (score >= 60 ? 'Conditional Pass' : 'Fail');
console.log(result); // Outputs: 'Pass'