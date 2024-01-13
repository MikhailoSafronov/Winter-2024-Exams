// Compare two dictionaries

//Step 2
//renamed the variables
const compareDictionaries = (firstDictionary, ...otherDictionaries) => {
  const secondDictionary = otherDictionaries[0];
  let keysFirst = Object.keys(firstDictionary);
  let keysSecond = Object.keys(secondDictionary);
  if (keysFirst.join('-') !== keysSecond.join('-')) return false;
  let areEqual = true;
  for (const key of keysFirst) {
    if (firstDictionary[key] === secondDictionary[key]) areEqual = areEqual && true;
    else {
      areEqual = areEqual && false;
    }
  }
  return areEqual;
};

module.exports = compareDictionaries;
