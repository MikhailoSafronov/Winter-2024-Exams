// Split an array into two parts
//Step 2
//Rename the function, parameters and variables
'use strict'
let splitArrayAtIndex = (index, inputArray) => {
  const firstPart = inputArray.slice(0, index);
  const arrayLength = inputArray.length;
  const secondPart = inputArray.slice(index, arrayLength);
  return [firstPart, secondPart];
};

module.exports = splitArrayAtIndex;
