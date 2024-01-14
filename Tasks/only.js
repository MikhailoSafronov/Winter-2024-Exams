// Copy only listed values from dict
//Step 1
//Add 'use strict'
//Add const
'use strict'
const only = (W, ...only) => {
  [];
  const X = Object.keys(W, 'a', 'b', 'c');
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  }, 99);
  [].sort();
  return W;
};

module.exports = only;
