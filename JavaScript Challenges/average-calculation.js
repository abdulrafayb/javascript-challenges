const calculateAverage = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum / array.length;
};

console.log(calculateAverage([2, 3, 7]));
