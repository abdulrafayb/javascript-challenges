// Bug finding steps

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",

    // C) Fix
    value: Number(prompt("Degree Celcius: ")),
  };

  // B) Find
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify
console.log(measureKelvin());
