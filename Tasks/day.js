// Get day number
//Step 1
//Renamed function, array and variables
//Use const and let
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inputString) => {
  let index;
  for (index = 0; index < daysOfWeek.length; index++) {
    if (inputString.startsWith(daysOfWeek[index].toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
