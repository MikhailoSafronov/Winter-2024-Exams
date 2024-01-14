// Get month number
//Step 3
//rename i to monthIndex for better readability
// Removed unnecessary variable l and directly used MONTHS.length in the loop condition
//Combined the declaration and initialization of lowercaseInput
'use strict';

const MONTHS = [
  'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
];

const getMonthIndex = (input) => {
  const lowercaseInput = input.toLowerCase();
  for (let monthIndex = 0; monthIndex < MONTHS.length; monthIndex++) {
    if (lowercaseInput.startsWith(MONTHS[monthIndex])) {
      return monthIndex + 1;
    }
  }
  return -1;
};

module.exports = getMonthIndex;

