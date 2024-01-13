//Step 6
//Replaced the unnecessary variable secondDictionary directly in the object within the Object.keys(otherDictionaries[0]) call.
// Replaced secondDictionary[key] with otherDictionaries[0][key] to obtain the value of the key without creating an additional variable.
const compareDictionaries = (firstDictionary, ...otherDictionaries) => {
  const keysFirst = Object.keys(firstDictionary);
  const keysSecond = Object.keys(otherDictionaries[0]);

  return keysFirst.join('-') === keysSecond.join('-') &&
      keysFirst.every(key => firstDictionary[key] === otherDictionaries[0][key]);
};
module.exports = compareDictionaries;







