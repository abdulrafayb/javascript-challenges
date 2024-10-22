/* Problem 1: We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error." */

// 1. Understanding the problem
// What is temperature amplitude? Answer: difference between highest and lowest temperature
// How to compute max and min temperatures?
// What's a sensor error? And what to do?

// 2. Breaking up into sub-problems
// How to ignore errors?
// Find min and max value in temperature array
// Subtract min from max and return it

console.log("One Temperature Array");

const temperatureArray1 = [4, 5, "error", 3, 4, 5, 6, 7];
const temperatureArray2 = [8, 5, "error", 9, 1, 2, 4, 9];

function calculateTemperatureAmplitude(temperature) {
  let minimumTemperature = temperature[0]; // min = 0;
  let maximumTemperature = temperature[0]; // max = 0;

  for (let i = 0; i < temperature.length; i++) {
    // const curTemp = temp[i];
    if (typeof temperature[i] !== "number") {
      continue;
    }
    if (temperature[i] < minimumTemperature) {
      minimumTemperature = temperature[i];
    }
    if (temperature[i] > maximumTemperature) {
      maximumTemperature = temperature[i];
    }
  }

  console.log(minimumTemperature, maximumTemperature);
  return maximumTemperature - minimumTemperature;
}

const amplitude = calculateTemperatureAmplitude(temperatureArray1);
console.log(amplitude);

/* Problem 2: Function should now receive 2 arrays of temperature */

// 1. Understanding the problem
// With 2 arrays, should we implement the same functionality twice? No!

// 2. Breaking up into sub-problems
// Merge two arrays

console.log("Two Temperature Arrays");

function newCalculateTemperatureAmplitude(temperature1, temperature2) {
  const temperature = temperature1.concat(temperature2);
  let minimumTemperature = temperature[0];
  let maximumTemperature = temperature[0];

  for (let i = 0; i < temperature.length; i++) {
    if (typeof temperature[i] !== "number") {
      continue;
    }
    if (temperature[i] < minimumTemperature) {
      minimumTemperature = temperature[i];
    }
    if (temperature[i] > maximumTemperature) {
      maximumTemperature = temperature[i];
    }
  }

  console.log(minimumTemperature, maximumTemperature);
  return maximumTemperature - minimumTemperature;
}

const newAmplitude = newCalculateTemperatureAmplitude(
  temperatureArray1,
  temperatureArray2
);
console.log(newAmplitude);
