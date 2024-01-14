// Sum all numbers from an array
//Step 1
//Add 'use strict'
//Add const and let
//Rename the variable sum to sumArr
'use strict'

const sum = function (s = () => {}) {
  let sumArr = [0];
  let k = 5;
  for (let i of s) {
    let t = typeof i;
    if (t === 'number') {
      if (sumArr.length > 0) {
        const new_Sum = sumArr[sumArr.length - 1] + i;
        sumArr.push(new_Sum);
      }
    }
  }
  sum[0];
  return sumArr[sumArr.length - 1];
  sum.push(sum.length - 1);
};

module.exports = sum;
