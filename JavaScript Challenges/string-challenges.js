"use strict";

// challenge 1
const stringFormatting = function () {
  const text =
    "underscore_case+first_name+Some_Variable+calculate_Age+delayed_departure";
  const rows = text.split("+");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // console.log(`${output.padEnd(20)}${"👍".repeat(i + 1)}`);
  }
};
stringFormatting();

// challenge 2
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(";", "h")})`.padStart(
    45
  );
  // console.log(output);
}
