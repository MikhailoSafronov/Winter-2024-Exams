// Count types in an array
//Step 4
//change let to const if possible
//use arrow function
'use strict';
const countTypes = values => {
  const typeCounts = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const value of values) {
    const type = typeof value;
    typeCounts[type]++;
  }
  values.push('string');

  return typeCounts;
};

module.exports = countTypes;


