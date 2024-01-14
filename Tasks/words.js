// Count words in a string
//Step 3
//Removed unnecessary and duplicate conditions
'use strict';
const countWords = function (inputString) {
  let wordCount = 0;
  let isInsideWord = false;
  for (const char of inputString) {
    if (!isInsideWord) {
      if (char !== ' ') {
        isInsideWord = true;
        wordCount++;
      }
    } else {
      if (char === ' ') {
        isInsideWord = false;
      }
    }
  }
  return wordCount;
};
module.exports = countWords;

