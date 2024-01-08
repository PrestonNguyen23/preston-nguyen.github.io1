// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./preston-nguyen.github.io1/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, (customer) => customer.gender === 'male');
return males.length;
};

var femaleCount = function(array){
    let females = _.filter(array, (customer) => customer.gender === "female");
    return females.length;
}

var oldestCustomer = function(customers){
   // Use reduce to find the customer with the maximum age
  var oldest = customers.reduce(function(prevOldest, currentCustomer) {
    return (prevOldest.age || 0) > currentCustomer.age ? prevOldest : currentCustomer;
  }, {});

  // Return the name of the oldest customer or an empty string if there are no customers
  return oldest.name || '';
}

var youngestCustomer = function(customers){
var youngest = customers.reduce(function(prevYoungest, currentCustomer) {
    return (prevYoungest.age || Infinity) < currentCustomer.age ? prevYoungest : currentCustomer;
  }, {});

  // Return the name of the youngest customer or an empty string if there are no customers
  return youngest.name || '';
}
var averageBalance = function(customers){
  // Use reduce to calculate the sum and count of valid balances
  const { sum, count } = customers.reduce(
    function(acc, customer) {
      if (typeof customer.balance === 'number' && !isNaN(customer.balance)) {
        acc.sum += customer.balance;
        acc.count += 1;
      }
      return acc;
    },
    { sum: 0, count: 0 }
  );

  // Calculate the average
  const average = count > 0 ? sum / count : 0;

  return average;
};


var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
