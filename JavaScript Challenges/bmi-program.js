const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

marksBMI = marksMass / (marksHeight * marksHeight);
johnsBMI = johnsMass / (johnsHeight * johnsHeight);

const markHigherBMI = marksBMI > johnsBMI;

console.log(
  "Mark's BMI: " +
    marksBMI +
    "\nJohn's BMI: " +
    johnsBMI +
    "\nIs Mark's BMI Higher Than John's: " +
    markHigherBMI
);

if (marksBMI > johnsBMI) {
  console.log(
    `Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})!`
  );
} else {
  console.log(
    `John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI})!`
  );
}
