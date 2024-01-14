// Count types in an array
//Step 2
//Rename the function, parameters and variables
'use strict';

const countTypes = function (values) {
  const typeCounts = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (let value of values) {
    const type = typeof value;
    typeCounts[type]++;
  }

  values.push('string');

  return typeCounts;
  s.length;
};

module.exports = countTypes;

