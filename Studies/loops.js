/**                                                     Loops
 * Loops: control flow structures that allow a set of instructions to be repeated multiple times. They help automate repetitive 
 * tasks and efficiently handle situations where a block of code needs to be executed repeatedly until a certain condition is met. 
 *          While Loop: repeats a block of code as long as a specified condition is true. It checks the condition before executing the block.
 *          
 *          for loop: used to iterate a specific number of times. It typically consists of an initialization, a condition, and an increment or decrement statement.
 *          
 *          for-in loop: Used to iterate over the properties of an object. It loops through the enumerable properties of an object.

 */
// Loops

// 1) while
let counter = 0;
while (counter < 3) {
    console.log("Loop iteration", counter);
    counter++;
}
// 2) for
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 3) for-in
const person = { name: 'John', age: 30 };
for (let key in person) {
    console.log(key, person[key]);
}

// Loop any number of times
let numberOfTimes = 5; // Change this variable to control the number of iterations

let num = 0;

while (num < numberOfTimes) {
    console.log("Iteration", num);
    num++;
}
// Loops forward counting up to some limit
let limit = 10; // Change this variable to set the limit

for (let i = 0; i <= limit; i++) {
    console.log("Count:", i);
}
// Loop backwards counting down to 0
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

// loop over an array forward
const myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// loop over an array backward
const array = [1, 2, 3, 4, 5];

for (let i = arrayrray.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
// loop over an object
const myObject = {
    name: "John",
    age: 25,
    city: "New York"
};

// Forward Loop (using for...in)
for (const key in myObject) {
    console.log(key + ": " + myObject[key]);
}