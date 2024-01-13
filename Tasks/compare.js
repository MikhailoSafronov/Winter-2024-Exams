// Step 4: Improved code simplicity
//Removed the unnecessary variable areEqual and simplified the return statement using every
//changed let to const if possible
const compareDictionaries = (firstDictionary, ...otherDictionaries) => {
  const secondDictionary = otherDictionaries[0];
  const keysFirst = Object.keys(firstDictionary);
  const keysSecond = Object.keys(secondDictionary);

  if (keysFirst.join('-') !== keysSecond.join('-')) {
    return false;
  }

  return keysFirst.every(key => firstDictionary[key] === secondDictionary[key]);
};

module.exports = compareDictionaries;







