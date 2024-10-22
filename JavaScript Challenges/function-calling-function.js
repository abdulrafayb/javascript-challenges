const calculateAverage = (numberOne, numberTwo, numberThree) =>
  (numberOne + numberTwo + numberThree) / 3;

const dolphinsAverage = calculateAverage(85, 54, 41);
const koalasAverage = calculateAverage(23, 34, 27);

console.log(
  `Dolphins Average Score Is: ${dolphinsAverage}, And Koalas Average Score Is: ${koalasAverage}`
);

const checkWinner = function (dolphinsScore, koalasScore) {
  if (dolphinsScore >= 2 * koalasScore) {
    console.log(
      `Dolphins Win The Game! Dolphins: ${dolphinsScore} Vs Koalas: ${koalasScore}`
    );
  } else if (koalasScore >= 2 * dolphinsScore) {
    console.log(
      `Koalas Win The Game! Koalas: ${koalasScore} Vs Dolphins: ${dolphinsScore}`
    );
  } else {
    console.log(`No One Wins The Game!`);
  }
};

checkWinner(dolphinsAverage, koalasAverage);
