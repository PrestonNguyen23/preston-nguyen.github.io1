// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
let arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(arrays) {
  let flattenedArray = arrays.reduce(function(result, currentArray) {
    return result.concat(currentArray);
  }, []);

  return flattenedArray;
}

let result = flatten();


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => code >= from && code < to)) {
        return script;
      }
    }
    return null;
  }

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name === name);
      if (known === -1) {
        counts.push({ name, count: 1 });
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name !== 'none');

  if (scripts.length === 0) {
    return 'ltr'; // Default to left-to-right if no script is detected
  }

  return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
