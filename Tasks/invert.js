// Reverse an array, you can't use .reverse()
//Step 3
//rename the input array
//Remove unused code
//Remove hardcode
'use strict';

const reverseArray = (inputArray) => {
  const reversedArray = [];
  inputArray.forEach((_, index) => {
    reversedArray.push(inputArray[inputArray.length - 1 - index]);
  });
  return reversedArray;
};

module.exports = reverseArray;
