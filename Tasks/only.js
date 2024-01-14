// Copy only listed values from dict
//Step 3
//Remove the unused code blocks and parameters
'use strict'
const filterObjectKeys = (inputObject, ...keysToKeep) => {

  const objectKeys = Object.keys(inputObject);
  objectKeys.forEach((key) => {
    if (keysToKeep.includes(key)) {
    } else {
      delete inputObject[key];
    }
  });

  return inputObject;
};

module.exports = filterObjectKeys;
