// Split an array into two parts
//Step 3
//Remove the unused code blocks and add .slice operation, improve the code readability
'use strict';

let splitArrayAtIndex = (index, inputArray) => {
  const firstPart = inputArray.slice(0, index);
  const secondPart = inputArray.slice(index);
  return [firstPart, secondPart];
};

module.exports = splitArrayAtIndex;
