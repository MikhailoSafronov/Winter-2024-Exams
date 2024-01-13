// Filter array by type name
//Step 2
// Add "use strict"
//Add const and let
'use strict'
const filterByType = (array, typeName) => {
  const remove = [];
  for (const element of array) {
    const index= array.indexOf(element);
    if (typeof array[index] !== typeName) {
      remove.unshift(index);
    }
  }
  for (const index of remove) array.splice(index, 1);
  return array;
};

module.exports = filterByType;






