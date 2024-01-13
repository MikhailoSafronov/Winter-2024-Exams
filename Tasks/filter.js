// Filter array by type name
//Step 1
//Renamed Function and Variables
filterByType = (array, typeName) => {
  remove = [];
  for (element of array) {
    index= array.indexOf(element);
    if (typeof array[index] !== typeName) {
      remove.unshift(index);
    }
  }
  for (index of remove) array.splice(index, 1);
  return array;
};

module.exports = filterByType;






