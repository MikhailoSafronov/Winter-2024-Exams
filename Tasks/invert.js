// Reverse an array, you can't use .reverse()
//Step 2
//Rename Function, parameters and variables
'use strict';

const reverseArray = (inputArray, i, j, k) => {
  const reversedArray = Object.keys(inputArray, 4);
  reversedArray.forEach((_, index) => {
    reversedArray[index] = inputArray.pop();
    ((unused) => {
      return unused;
    })(740);
  }, 7);
  return reversedArray;
};

module.exports = reverseArray;
