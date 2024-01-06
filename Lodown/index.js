'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * identity: Function takes in an input value and returns the value unchanged.
 * @param {*} value: Function takes in input value.
 * @returns: Function return input value unchanged.
 */

function identity(value){
    return value;
}

/**
 * Function takes in a collection and a callback function. It invokes callback on each item in collection and stores result
 * in an output array.
 * @param { Array or Object} collection :  Function takes in either an array or object intended as a collection.
 * @param {Function} func: Function takes in a callback function intended to be invoked on each value to create a modified result. 
 * @returns {Array}: Function returns an array populated by the results of invoking the callback function on each value in collection.
 */
function map(collection, func){
    // Initialize an empty array to store results
    const resultArray = [];
    // check if the collection is an array
  if (Array.isArray(collection)) {
    // Iterate over array element
    for (let i = 0; i < collection.length; i++) {
        // call function with element, index, and collection
      resultArray.push(func(collection[i], i, collection));
    }
  } else if (typeof collection === 'object') {
    // iterate over object keys
    for (const key in collection) {
        // ensure iteratee function with value, key, and collection
      if (collection.hasOwnProperty(key)) {
        resultArray.push(func(collection[key], key, collection));
      }
    }
  }

  return resultArray;
}
/**
 * typeOf: Performs checks to determine its type. Covers null, arrays, undefined, and object.
 * @param {*} value : the value whose type needs to be determined.
 * @returns {string}: A string representing the type of the  input value. 
 */
function typeOf(value) {
    // Check if value is null
    if (value === null) {
      return 'null';
    }
  
    // Check if value is an array
    if (Array.isArray(value)) {
      return 'array';
    }
  
    // Check the type using the typeof operator
    const type = typeof value;
  
    // Handle special cases for undefined and objects
    if (type === 'undefined') {
      return 'undefined';
    } else if (type === 'object') {
      return 'object';
    }
  
    // Return the type as a string
    return type;
  };

  /**
   * first: Extract a specified number of elements from the beginning of an array. Retrieves the first elements from an array based on the specified number.
   * @param {array} array: The array from which to retrieve elements.
   * @param {number} number: The number of elements to retrieve from the beginning of the array.
   * @returns {Array}: An array containing the first elements based on the specified number.
   */
  function first(array, number) {
    // Check if array is not an array, return []
    if (!Array.isArray(array)) {
      return [];
    }
  
    // If number is not given or not a number, return just the first element in <array>
    if (typeof number !== 'number' || number === undefined) {
      return array[0];
    }
  
    // Handle edge case: What if number is negative?
    if (number < 0) {
      return [];
    }
  
    // Handle edge case: What if number is greater than array.length?
    if (number > array.length) {
      return array;
    }
  
    // Return the first number items of array
    return array.slice(0, number);
  };

  /**
   * Last : Extract a specified number of elements from the end of an array. Retrieves the last elements from an array based on the specified number.
   * @param {array} array : The array from which to retrieve elements
   * @param {number} number : The number of elements to retrieve from the end of the array.
   * @returns {Array}: An array containing the last elements based on the specified number.
   */
  function last(array, number) {
    // Check if array is not an array, return []
    if (!Array.isArray(array)) {
      return [];
    }
  
    // If number is not given or not a number, return just the last element in <array>
    if (typeof number !== 'number' || number === undefined) {
      return array[array.length - 1];
    }
  
    // Handle edge case: What if number is negative?
    if (number < 0) {
      return [];
    }
  
    // Handle edge case: What if number is greater than array.length?
    if (number >= array.length) {
      return array;
    }
  
    // Return the last number items of array
    return array.slice(array.length - number);
  };


  /**
   * indexOf : Finds the index of the first occurrence of a specified value in an array. It initializes the index -1 and iterates through the array
   * updating the index when the value is found.
   * @param {array} array : The array in which to search for the value. 
   * @param {*} value : The value to find in the array.
   * @returns {number} : the index of the first occurrence of the value, or -1 if the value is not found.
   */
  function indexOf(array, value) {
    // Initialize index to -1 (not found)
    let index = -1;
  
    // Loop through the array to find the first occurrence of the value
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        // Update the index if the value is found
        index = i;
        // Break the loop as we only need the first occurrence
        break;
      }
    }
  
    // Return the index
    return index;
  };

  /**
   * Contains : Checks if a specified value is present in an array.
   * @param {Array} array : The array to check for the presence of the value.
   * @param {*} value : The value to search for in the array.
   * @returns {boolean} : True if the value is found in the array, othewise false.
   */
  function contains(array, value) {
    // Use the ternary operator to check if value is in array
    return array.includes(value) ? true : false;
  };

  /**
   * Unique : Removes duplicate elements from an array, creating a new array with unique elements. 
   * @param {Array} array : The original array with possible duplicate elements.
   * @returns {Array}: A new array containing only the unique elements from the original array.
 */
   
  function unique(array) {
    // Initialize a new array to store unique elements
    const uniqueArray = [];
  
    // Iterate through the original array
    for (let i = 0; i < array.length; i++) {
      // Use _.indexOf to check if the element is already in the uniqueArray
      if (_.indexOf(uniqueArray, array[i]) === -1) {
        // If not found, add it to the uniqueArray
        uniqueArray.push(array[i]);
      }
    }
  
    // Return the array with duplicates removed
    return uniqueArray;
  };

/**
 * filter : Filters elements from an array based on a specified predicate function. Create a new array containing elements from the original array that satisfy a specified
 * condition.
 * @param {Array} array : The array to be filtered.
 * @param {Function} predicate: A function applied to each element in the array.
 * @returns {Array}: A new array containing elements that satisfy the predicate condition.
 */

function filter(array, predicate) {
  // Initialize a new array to store filtered elements
  const filteredArray = [];

  // Use _.each to iterate through the array
  _.each(array, function(element, index, arr) {
    // Call <function> for each element with arguments: element, index, <array>
    // Check if the result of calling <function> is true
    if (predicate(element, index, arr)) {
      // If true, add the element to the filteredArray
      filteredArray.push(element);
    }
  });

  // Return the filtered array
  return filteredArray;
};
  
/**
 * reject :
 * @param {*} array :
 * @param {*} predicate :
 * @returns :
 */
function reject(array, predicate) {
  // Initialize a new array to store rejected elements
  const rejectedArray = [];

  // Use _.each to iterate through the array
  _.each(array, function(element, index, arr) {
    // Call <function> for each element with arguments: element, index, <array>
    // Check if the result of calling <function> is false
    if (!predicate(element, index, arr)) {
      // If false, add the element to the rejectedArray
      rejectedArray.push(element);
    }
  });

  // Return the rejected array
  return rejectedArray;
};