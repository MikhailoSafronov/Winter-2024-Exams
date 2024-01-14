// Count words in a string
//Step 4
//Combined conditions inside the loop for better readability
//Removed unnecessary braces around single-line if statements for simplicity
'use strict';
const countWords = function (inputString) {
  let wordCount = 0;
  let isInsideWord = false;
  for (const char of inputString) {
    if (!isInsideWord && char !== ' ') {
      isInsideWord = true;
      wordCount++;
    } else if (isInsideWord && char === ' ') {
      isInsideWord = false;
    }
  }
  return wordCount;
};
module.exports = countWords;


