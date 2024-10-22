const calculateTip = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

const bills = [125, 555, 44];
const tips = [
  calculateTip(bills[0]),
  calculateTip(bills[1]),
  calculateTip(bills[2]),
];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
