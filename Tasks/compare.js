// Step 5
//Combined the conditions in the return statement for better quality and readability
const compareDictionaries = (firstDictionary, ...otherDictionaries) => {
  const secondDictionary = otherDictionaries[0];
  const keysFirst = Object.keys(firstDictionary);
  const keysSecond = Object.keys(secondDictionary);

  return keysFirst.join('-') === keysSecond.join('-') &&
      keysFirst.every(key => firstDictionary[key] === secondDictionary[key]);
};

module.exports = compareDictionaries;








