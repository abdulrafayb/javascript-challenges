"use strict";

console.log("Challenge 01");

const checkDogs = function (dogsJulia, dogsKate) {
  // part one
  const dogsJuliaCorrected = dogsJulia.slice();
  // dogsJulia.slice(1, 3);
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  // part two
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  // part three
  dogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log("\nChallenge 02");

const calAverageHumanAgeOne = function (ages) {
  // part one
  const humanAges = ages.map((age) => (age <= 2 ? age * 2 : age * 4 + 16));

  // part two
  const adults = humanAges.filter((age) => age > 17);

  // part three
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length; // works only on a specified array's length
  // two ways to calculate average (2+3)/2 = 2.5 === 2/2+3/2 = 2.5, the second way is better because it works on current array's length
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  console.log(humanAges);
  console.log(adults);
  console.log(average);
};

calAverageHumanAgeOne([5, 2, 4, 1, 15, 8, 3]);

console.log("\nChallenge 03");

const calAverageHumanAgeTwo = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter((age) => age > 17)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calAverageHumanAgeTwo([5, 2, 4, 1, 15, 8, 3]));

console.log("\nChallenge 04");

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// part one
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs[dogs.length - 1]);

// part two
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  } `
);

// part three
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// part four
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// part five
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// part six
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// part seven
console.log(dogs.filter(checkEatingOkay));

// part eight
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
