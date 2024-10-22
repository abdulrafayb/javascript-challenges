dolphinsScore = 97 + 112 + 101;
koalasScore = 109 + 95 + 123;

dolphinsAverage = dolphinsScore / 3;
koalasAverage = koalasScore / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(
    `The Winner Is Dolphin's Team With A Average Score Of ${dolphinsAverage}`
  );
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(
    `The Winner Is Koalas's Team With A Average Score Of ${koalasAverage}`
  );
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(
    `It's A Draw! Dolphin's Average Score (${dolphinsAverage}) Vs Koalas's Average Score (${koalasAverage})`
  );
} else {
  console.log(`No One Wins The Game`);
}
