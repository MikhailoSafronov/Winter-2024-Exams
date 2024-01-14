// Copy only listed values from dict
//Step 4
//Instead of deleting keys directly from the input object,  created a new object (filteredObject) to store the filtered keys
// Used Object.keys(inputObject) to get the keys of the input object directly in the loop to improve readability.
'use strict';

const filterObjectKeys = (inputObject, ...keysToKeep) => {
  const filteredObject = {};

  Object.keys(inputObject).forEach((key) => {
    if (keysToKeep.includes(key)) {
      filteredObject[key] = inputObject[key];
    }
  });

  return filteredObject;
};

module.exports = filterObjectKeys;
