// Sum all numbers from an array
//Step 3
//Removed the unused and unnecessary code blocks
'use strict';
const calculateSum = function (numbersArray =[]) {
  let sumArray = [0];
  for (let num of numbersArray) {
    if (typeof num === 'number') {
        const newSum = sumArray[sumArray.length - 1] + num;
        sumArray.push(newSum);
    }
  }
  return sumArray[sumArray.length - 1];
};

module.exports = calculateSum;
