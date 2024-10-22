// 1) Understanding the problem
// Array transformed to string, separated by ...
// What is the X days? Answer: index + 1

// 2) Breaking into sub-problems
// Transform array into string
// Transform each element to string with C
// String needs to contain day (index + 1)
// Add ... between elements and start at the end of string

const tempArray = [17, 21, 23];

function printForecast(array) {
  let printingString = "";
  for (i = 0; i < array.length; i++) {
    printingString += `${array[i]}ºC in ${i + 1} days ... `;
  }
  console.log("... " + printingString);
}

printForecast(tempArray);
