/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animal, name) {
    for (let animal of animals) {
        if (animal.name === name) {
            return animal;
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement;
            break;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i, 1);
            break;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    if (animal.name && animal.name.length > 0 && animal.species && animal.species.length > 0) {
        // check for a unique name
        let isUnique = animals.every(exisitingAnimal => exisitingAnimal.name !== animal.name);
        if (isUnique) {
            animals.push(animal);
          } else {
            console.error('Error: Animal with the same name already exists.');
          }
        } else {
          console.error('Error: Animal must have a name and species with a length greater than 0.');
        }
    }



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
