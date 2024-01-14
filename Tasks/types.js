// Count types in an array
//Step 3
//Removed the unreachable line s.length; as it doesn't have any impact
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

};

module.exports = countTypes;

