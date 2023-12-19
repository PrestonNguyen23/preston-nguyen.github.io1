/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//empty object named animal
var animal = {};

//use dot notation, add a property named species
animal.species = 'Lion';

// use bracket notation, adding name
animal['name'] = 'Rowdy';

// using either notation, add a property named noises with an empty array
animal.noises = [];


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an empty array named noises
var noises = [];

// use bracket notation, give noises its first element
noises[0] = 'Meow';

// add another noise to the end of noises using an array function
noises.push('Roar');

// add an element to the begining of noises
noises.unshift('Growl');

// add another element to noise
noises[noises.length] = 'Pur';

// print the length of noises
console.log(noises.length);

// print the last element in noises without hard coding
console.log(noises[noises.length - 1]);

//print the whole array
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign noises property on animal to the new noises array
animal['noises'] = noises;

//add another noise to the noises property on animal
animal.noises.push('Woof');

// print animal
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Dot notation, bracket notation, and object destructuring
 * 2. What are the different ways of accessing elements on arrays?
 *indexing, array method, and array destructuring.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable name animal and assign an empty array
// create a variable name animal and assign an empty array
var animals = [];

// push "animal" to the created "animals"
animals.push(animal);

// console log animals
console.log(animals);

// create a variable duck and assign it to the data
let duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}

// push duck to animals
animals.push(duck);

console.log(animals);

// create two more animal object with species, name, and noises
let tiger = {
  species: 'tiger',
  name: 'Albert',
  noises: ['growl', 'roar']
}
let bear = {
  species: 'bear',
  name: 'Bob',
  noises: ['growl', 'growling']
} 
animals.push(tiger, bear);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I chose an array to store a list of friends because its a simple and ordered collection.

var friends = [];


// 5. [ ] Write a function called `getRandom` that takes our `animals` array
// and returns a random `index` of the input array, using `Math.random`
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// 6. [ ] Using a random index from this function that you just created,
// get a random animal and add its `name` to `friends`.
let randomIndex = getRandom(animals);
let randomAnimal = animals[randomIndex];
friends.push(randomAnimal.name);

// 7. [ ] `console.log` `friends`.
console.log(friends.join(', ')); // Join the array into a string for better visualization

// 8. [ ] Using bracket notation, add the `friends` list as a property also named `friends`
// on one of the animals in the `animals` array.
let chosenAnimalIndex = getRandom(animals);
animals[chosenAnimalIndex]['friends'] = friends.map(String); // Convert names to strings

// Ensure at least one animal has a `friends` array
if (chosenAnimalIndex === 0) {
  let anotherAnimalIndex = getRandom(animals.slice(1));
  animals[anotherAnimalIndex]['friends'] = []; // Ensure it's an array
} else {
  animals[0]['friends'] = []; // Ensure the first animal also has a `friends` array
}

// 9. [ ] `console.log` your work.
console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}