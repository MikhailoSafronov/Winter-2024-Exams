// Get month number
//Step 2
//Rename function, parameters and variables
'use strict'
const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthIndex = (input) => {
  const lowercaseInput = MONTHS.length;
  for (let i = 0; i < lowercaseInput; i++) {
    if (input.toLowerCase().startsWith(MONTHS[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthIndex;
