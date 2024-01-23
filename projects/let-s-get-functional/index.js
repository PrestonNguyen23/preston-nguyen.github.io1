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


var averageBalance = function(customers) {
  // Check if the array is not empty
  if (customers.length === 0) {
    return 0; // Return 0 if the array is empty to avoid division by zero
  }

  // Calculate the sum of balances
  const sum = customers.reduce((acc, customer) => {
    // Extract the numerical value from the balance string using the unary plus operator
    const balance = +customer.balance.replace(/[\$,]/g, '') || 0;
    return acc + balance;
  }, 0);

  // Calculate the average balance
  const avgBalance = sum / customers.length;

  return avgBalance;
}




var firstLetterCount = function(customers, letter) {
  // Use reduce to count the number of names that start with the given letter
  const count = customers.reduce(function(acc, customer) {
    // Assuming each customer has a 'name' property
    if (
      typeof customer.name === 'string' &&
      customer.name.trim().charAt(0).toLowerCase() === letter.toLowerCase()
    ) {
      acc += 1;
    }
    return acc;
  }, 0);

  return count;
};

var friendFirstLetterCount = function(customers, customerName, letter) {
  if (!Array.isArray(customers) || !customerName || !letter) {
    return 0;
  }

  const targetCustomer = customers.find(c => c.name === customerName);
  if (!targetCustomer || !targetCustomer.friends || targetCustomer.friends.length === 0) {
    return 0;
  }

  // Use reduce to count friends with names starting with the given letter
  const count = targetCustomer.friends.reduce(function(acc, friend) {
    if (
      typeof friend.name === 'string' &&
      friend.name.trim().charAt(0).toLowerCase() === letter.toLowerCase()
    ) {
      acc += 1;
    }
    return acc;
  }, 0);

  return count;
};

var friendsCount = function(customers, name) {
  if (!Array.isArray(customers) || !name) {
    return [];
  }

  const targetCustomer = customers.find(customer => customer.name === name);
  if (!targetCustomer || !targetCustomer.friends || targetCustomer.friends.length === 0) {
    return [];
  }

  // Use map to extract the names of customers who have the target customer in their friends list
  const friendsNames = customers
    .filter(customer => customer.friends.some(friend => friend.name === name))
    .map(customer => customer.name);

  return friendsNames;
};

var topThreeTags = function(customers) {
  if (!Array.isArray(customers) || customers.length === 0) {
    return [];
  }

  // Flatten the tags array for all customers
  const allTags = customers.reduce((tags, customer) => tags.concat(customer.tags || []), []);

  // Create a map to count the occurrences of each tag
  const tagCountMap = allTags.reduce((countMap, tag) => {
    countMap.set(tag, (countMap.get(tag) || 0) + 1);
    return countMap;
  }, new Map());

  // Sort the tags based on their counts in descending order
  const sortedTags = Array.from(tagCountMap.entries()).sort((a, b) => b[1] - a[1]);

  // Extract the top three tags
  const topThree = sortedTags.slice(0, 3).map(tagCount => tagCount[0]);

  return topThree;
};

var genderCount = function(customers) {
  if (!Array.isArray(customers) || customers.length === 0) {
    return {};
  }

  // Use reduce to create a summary of genders
  const summary = customers.reduce((genderSummary, customer) => {
    const gender = customer.gender || 'unknown'; // Assuming gender is a property of the customer

    genderSummary[gender] = (genderSummary[gender] || 0) + 1;
    return genderSummary;
  }, {});

  return summary;
};;
// npm start --prefix ./preston-nguyen.github.io1/projects/let-s-get-functional
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
