let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;

console.log(
  `The Bill Is ${bill}, The Tip Is ${tip}, And The Total Value Is ${total}`
);
