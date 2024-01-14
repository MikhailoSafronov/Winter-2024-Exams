// Count words in a string
//Step 2
//Rename the function, parameters and variables
'use strict'
const countWords = function (inputString) {
  let wordCount = 0;
  let isInsideWord = false;
  for (const c of inputString) {
    if (!isInsideWord) {
      if (c === ' ') {
        if (isInsideWord === true) {
          isInsideWord = false;
        } else {
          isInsideWord = false;
        }
      } else {
        if (isInsideWord === true) {
          isInsideWord = true;
        } else {
          isInsideWord = true;
        }
        wordCount++;
      }
    } else {
      if (c === ' ') {
        if (isInsideWord === true) {
          isInsideWord = false;
        } else {
          isInsideWord = false;
        }
      } else {
        if (isInsideWord === true) {
          isInsideWord = true;
        } else {
          isInsideWord = true;
        }
      }
    }
  }
  return wordCount;
};

module.exports = countWords;
