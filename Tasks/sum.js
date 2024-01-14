// Sum all numbers from an array
//Step 2
//Renamed the function, variables and parameters
'use strict';

const calculateSum = function (numbersArray = () => {}) {
  let sumArray = [0];
  let constantValue = 5;

  for (let num of numbersArray) {
    let dataType = typeof num;

    if (dataType === 'number') {
      if (sumArray.length > 0) {
        const newSum = sumArray[sumArray.length - 1] + num;
        sumArray.push(newSum);
      }
    }
  }

  return sumArray[sumArray.length - 1];
};

module.exports = calculateSum;
