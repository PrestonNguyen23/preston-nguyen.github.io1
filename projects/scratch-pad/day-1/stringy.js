// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    // return length property of input string
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    //use the toLowerCase medthod to convert the string to lowercase
    var lowerCaseString = string.toLowerCase();
    // return lowerCaseString
    return lowerCaseString;

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // use the toUpperCaseString method
    var upperCaseString = string.toUpperCase();
    //return the new string
    return upperCaseString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // first convert the string to lowercase using lowercase method
    var lowerCaseString = string.toLowerCase();
    // second use split method to split the string to an array
    var array = lowerCaseString.split(' ');
    // join method to join in dashes 
    var dash = array.join('-');
return dash;

    // YOUR CODE ABOVE HERE //
}
/**Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// Convert the first character of the string and the specified character to lowercase
const firstChar = string[0].toLowerCase();
const specifiedChar = char.toLowerCase();

// Check if the first character matches the specified character
return firstChar === specifiedChar;
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // make the parameters case insensitive
    var lowerCaseString = string.toLowerCase();
    var lowerCaseChar = char.toLowerCase();
    // get the last value of the string
    var lastChar = lowerCaseString[lowerCaseString.length - 1];
    //make sure the last character matches with the specified character
    return lastChar === lowerCaseChar;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // use the concat method to concatenate two strings
    var concatenatedString = stringOne.concat(stringTwo);
    // return the concat string
    return concatenatedString;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //use the join method 
    var result = args.join('');
    return result;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // compare then length of both the strings
    if (stringOne.length > stringTwo.length){
        // return the first string if longer
        return stringOne;
    } else {
        // return stringtwo if its longer than stringone
        return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  // Iterate through the characters of both strings
  for (let i = 0; i < Math.min(stringOne.length, stringTwo.length); i++) {
    var charOne = stringOne[i].toLowerCase(); // Case-insensitive comparison
    var charTwo = stringTwo[i].toLowerCase(); // Case-insensitive comparison

    if (charOne < charTwo) {
      return 1; // stringOne is higher in alphabetical order
    } else if (charOne > charTwo) {
      return -1; // stringTwo is higher in alphabetical order
    }
    // If characters are equal, continue to the next character
  }

  // If one string is a prefix of the other, the longer string comes later in alphabetical order
  if (stringOne.length < stringTwo.length) {
    return 1;
  } else if (stringOne.length > stringTwo.length) {
    return -1;
  }

  // Both strings are equal
  return 0;
}
    
    // YOUR CODE ABOVE HERE //



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
 // Iterate through the characters of both strings
 for (let i = 0; i < Math.min(stringOne.length, stringTwo.length); i++) {
    var charOne = stringOne[i].toLowerCase(); // Case-insensitive comparison
    var charTwo = stringTwo[i].toLowerCase(); // Case-insensitive comparison

    if (charOne < charTwo) {
      return -1; // stringOne is higher in alphabetical order
    } else if (charOne > charTwo) {
      return 1; // stringTwo is higher in alphabetical order
    }
    // If characters are equal, continue to the next character
  }

  // If one string is a prefix of the other, the longer string comes later in alphabetical order
  if (stringOne.length < stringTwo.length) {
    return 1;
  } else if (stringOne.length > stringTwo.length) {
    return -1;
  }

  // Both strings are equal
  return 0;



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
