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
 * reject : Creates a new array containing elements that do not satisfy a specified predicate function.
 * @param {Array} array : The array to be filtered
 * @param {Function} predicate : A function applied to each element in the array.
 * @returns {Array}: A new array containing elements that do not satisfy the predicate condition.
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
/**
 * Partition : Partitions an array into two separate arrays based on a specified predicate function.
 * @param {Array} array : The array to be partitioned.
 * @param {Function} predicate : A function applied to each element in the array. Should return truthy for elements to be included in the first array
 * and falsy for elements to be included in the second array.
 * @returns {Array} :  An array containing two sub-arrays:
 *  - The first sub-array contains elements for which the predicate returns truthy.
 *  - The second sub-array contains elements for which the predicate returns falsy.
 */
function partition(array, predicate) {
  // Initialize arrays to store truthy and falsy values
  const truthyArray = [];
  const falsyArray = [];

  // Use _.each to iterate through the array
  _.each(array, function(element, index, arr) {
    // Call <function> for each element with arguments: element, index, <array>
    // Check if the result of calling <function> is truthy or falsy
    if (predicate(element, index, arr)) {
      // If truthy, add the element to the truthyArray
      truthyArray.push(element);
    } else {
      // If falsy, add the element to the falsyArray
      falsyArray.push(element);
    }
  });

  // Return an array containing the truthy and falsy arrays
  return [truthyArray, falsyArray];
};
/**
 * Pluck : Extracts values for a specified property from an array of objects. It uses _.map to iterate through each object in the array,
 * extracting the value of the specified property for each object.
 * @param {Array} arrayOfObjects :  An array of objects from which to extract values.
 * @param {String} property : The property for which values will be extracted from each object.
 * @returns {Array}: An array containing the values of the specified property from each object.
 */
 
function pluck(arrayOfObjects, property) {
  // Use _.map to create an array of values for the specified property
  return _.map(arrayOfObjects, function(obj) {
    // Return the value of the specified property for each object
    return obj[property];
  });
};

/**
 * Every: Checks if every element in a collection satisfies a specified condition.
 * If no condition function is provided, it checks if every element is truthy.
 * @param {Array|Object} collection : The collection to be checked.
 * @param {Function} func : A condition function applied to each element in the collection.
 * Should return true for elements that satisfy the condition.
 * @returns {boolean} : True if every element satisfies the condition, otherwise false.
 */
function every(collection, func) {
  // If function is not provided, check if every element is truthy
  if (func === undefined) {
    return collection.every(element => Boolean(element));
  }

  // Check if every element satisfies the condition provided by the function
  if (Array.isArray(collection)) {
    // If collection is an array, iterate over elements
    for (let i = 0; i < collection.length; i++) {
      if (!func(collection[i], i, collection)) {
        return false;
      }
    }
  } else if (typeof collection === 'object') {
    // If collection is an object, iterate over values
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (!func(collection[key], key, collection)) {
          return false;
        }
      }
    }
  }

  // If all elements satisfy the condition, return true
  return true;
};

/**
 * Some: Checks if at least one element in a collection satisfies a specified condition.
 * If no condition function is provided, it checks if at least one element is truthy.
 * @param {Array|Object} collection : The collection to be checked.
 * @param {Function} func : A condition function applied to each element in the collection.
 * Should return true for elements that satisfy the condition.
 * @returns {boolean}: True if at least one element satisfies the condition, otherwise false.
 */
function some(collection, func) {
  // Default value for the result
  let result = false;

  // Use _.each to iterate through the collection
  _.each(collection, function(element, index, arr) {
    // Call <function> for every element with the parameters specified
    const condition = func ? func(element, index, arr) : element;

    // Check if the return value is truthy
    if (condition) {
      // If true, update the result and break the loop
      result = true;
      return false;
    }
  });

  // Return the final result
  return result;
};

/**
 * Reduce : Reduces an array to a single value by applying a specified function to each element. The function takes the previous result,
 * current element, and current index as parameters and returns a new result.
 * @param {Array} array : The array to be reduced.
 * @param {Function} func :A function that takes the previous result, current element, and current index
 * and returns a new result.
 * @param {*} seed : The initial value to use as the "previous result" in the reduction.
 * @returns : The final result after applying the function to each element in the array.
 */
 
function reduce(array, func, seed) {
  // Initialize the "previous result" with the seed or the first element of the array
  let previousResult = seed !== undefined ? seed : array[0];

  // Determine the starting index based on whether a seed was provided
  const startIndex = seed !== undefined ? 0 : 1;

  // Use _.each to iterate through the array starting from the appropriate index
  _.each(array.slice(startIndex), function(element, index) {
    // Call <function> for every element with the specified arguments
    previousResult = func(previousResult, element, index + startIndex);
  });

  // Return the final result after all iterations
  return previousResult;
};

/**
 * Extend : Extends the properties of one or more source objects onto a target object. iterates through each source object and copies its
 * own enumerable and own properties to the target object. The function then returns the updated target object.
 * @returns {Object}: The target object after being extended with properties from the source objects.
 */
function extend() {
  // Get the target object (the first argument)
  const targetObject = arguments[0];

  // Iterate through the rest of the arguments (source objects)
  for (let i = 1; i < arguments.length; i++) {
    // Get the current source object
    const sourceObject = arguments[i];

    // Copy properties from sourceObject to targetObject
    for (const key in sourceObject) {
      // Check if the property is present in the sourceObject
      if (sourceObject.hasOwnProperty(key)) {
        // Copy the property to the targetObject
        targetObject[key] = sourceObject[key];
      }
    }
  }

  // Return the updated targetObject
  return targetObject;
};