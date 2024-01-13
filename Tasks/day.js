// Get day number
//Step 2
//Use for...of loop for cleaner array iteration.
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const parseDay = (inputString) => {
  for (const [index, day] of daysOfWeek.entries()) {
    if (inputString.startsWith(day.toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};


module.exports = parseDay;
