// Count types in an array
//Step 1
//Add 'use strict'
//Add const and let
'use strict'
const types_ = function (s) {
  const types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (let i of s) {
    const t = typeof i;
    types_[t]++;
  }
  s.push('string');
  return types_;
  s.length;
};

module.exports = types_;
