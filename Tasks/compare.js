
// Step 3
// Removed unnecessary conditions in the internal loop
const compareDictionaries = (firstDictionary, ...otherDictionaries) => {
  const secondDictionary = otherDictionaries[0];
  let keysFirst = Object.keys(firstDictionary);
  let keysSecond = Object.keys(secondDictionary);
  if (keysFirst.join('-') !== keysSecond.join('-')) return false;
  let areEqual = true;
  for (const key of keysFirst) {
    areEqual = areEqual && (firstDictionary[key] === secondDictionary[key]);
  }
  return areEqual;
};

module.exports = compareDictionaries;

