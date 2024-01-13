// Filter array by type name
//Step 3
//Removed the unnecessary remove array
//Used the filter method directly to create a new array with elements that satisfy the condition

'use strict';

const filterByType = (array, typeName) => {
  const filteredArray = array.filter((element) => typeof element === typeName);
  return filteredArray;
};

module.exports = filterByType;








