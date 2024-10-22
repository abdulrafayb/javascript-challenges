const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

let sum = 0;

const tipCalculation = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

for (let i = 0; i < bills.length; i++) {
  tips.push(tipCalculation(bills[i]));
  totals.push(bills[i] + tips[i]);
  sum = sum + totals[i];
}

console.log(totals);
console.log(sum);

calculateAverage = (average) => sum / average.length;

console.log(calculateAverage(totals));
console.log(calculateAverage([2, 3, 4, 5])); //that's why we created a different function

/* check the averageCalculation code, what we did is created a seperate function that takes an array and then sums it up and gives a average but above it will not take an input array but will only give the answer to an already summed up array. so the functionality is different but creating a seperate function for it is better. STTA */
