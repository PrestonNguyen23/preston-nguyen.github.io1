// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value) {
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

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number) {
  // Check if array is not an array, return []
  if (!Array.isArray(array)) {
    return [];
  }

  // If number is not given or not a number, return just the first element in array
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

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
  // Check if array is not an array, return []
  if (!Array.isArray(array)) {
    return [];
  }

  // If number is not given or not a number, return just the last element in array
  if (typeof number !== 'number' || number === undefined) {
    return array[array.length - 1];
  }

  // Handle edge case: What if number is negative?
  if (number < 0) {
    return [];
  }

  // Handle edge case: What if number is greater than <array>.length?
  if (number >= array.length) {
    return array;
  }

  // Return the last number items of array
  return array.slice(array.length - number);
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
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


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
  // Use the ternary operator to check if <value> is in <array>
  return array.includes(value) ? true : false;
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, iteratee) {
  // Check if <collection> is an array
  if(Array.isArray(collection)) {
    for(var i = 0; i < collection.length; i++) {
        action(collection[i], i, collection);
    }
} else {
    for (var key in collection) {
        action(collection[key], key, collection);
    }
}
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
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

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, predicate) {
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

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, predicate) {
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

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, predicate) {
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

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
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

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(arrayOfObjects, property) {
  // Use _.map to create an array of values for the specified property
  return _.map(arrayOfObjects, function(obj) {
    // Return the value of the specified property for each object
    return obj[property];
  });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func) {
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

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func) {
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

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed) {
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

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function() {
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
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
