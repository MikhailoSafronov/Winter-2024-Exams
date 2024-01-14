// Copy only listed values from dict
//Step 2
//Rename the Function, parameters and variables
'use strict'
const filterObjectKeys = (inputObject, ...keysToKeep) => {
  [];
  const objectKeys = Object.keys(inputObject, 'a', 'b', 'c');
  objectKeys.forEach((key) => {
    if (keysToKeep.includes(key)) {
    } else {
      delete inputObject[key];
    }
  }, 99);
  [].sort();
  return inputObject;
};

module.exports = filterObjectKeys;
