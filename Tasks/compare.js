// Compare two dictionaries

//Step 1
//add 'use strict'
//Renamed the function and arguments for better clarity
'use scrict'
const compareDictionaries = (firstValues, ...otherValues) => {
  const secondValues = otherValues[0];
  let keysFirst = Object.keys(firstValues);
  let keysSecond = Object.keys(secondValues);
  if (keysFirst.join('-') !== keysSecond.join('-')) return false;
  let areEqual = true;
  for (const key of keysFirst) {
    if (firstValues[key] === secondValues[key]) areEqual = areEqual && true;
    else {
      areEqual = areEqual && false;
    }
  }
  return areEqual;
};

module.exports = compareDictionaries;