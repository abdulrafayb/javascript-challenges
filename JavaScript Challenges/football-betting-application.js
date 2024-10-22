"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// const [playersOne, playersTwo] = game.players;
// const gkOne = game.team1;
// const gkTwo = game.team2;
// const arrOne = [gkOne];
// const arrTwo = [gkTwo];
// const teamOne = [...arrOne, ...playersOne];
// const teamTwo = [...arrTwo, ...playersTwo];

// const addArr = [];
// let score = 0;
// for (let i = 0; i < playerNames.length; i++) {
//   addArr.push(playerNames[i]);
//   score += 1;
// }
// console.log(addArr);
// console.log(`Score: ${score}`);

// Challenge 1
// Task 1
const [playersOne, playersTwo] = game.players;

// Task 2
const [gkTeamOne, ...fieldPlayersOne] = playersOne;
const [gkTeamTwo, ...fieldPlayersTwo] = playersTwo;

// Task 3
const allPlayers = [...playersOne, ...playersTwo];

// Task 4
const playersOnefinal = [...playersOne, "Thiago", "Coutinho", "Perisic"];

// Task 5
const {
  odds: { team1, x: draw, team2 },
} = game;

// Task 6
const printGoals = function (...players) {
  // console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// Task 7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// Challenge 2
// Task 1
for (const [index, players] of game.scored.entries()) {
  // console.log(`Goal ${index + 1}: ${players}`);
}

// Task 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
// console.log(average);

// Task 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  // console.log(`Odd of ${teamStr} ${odd}`);
}

// Task 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);

// Challenge 3
// Task 1
// const events = new Set([...gameEvents.values()]);
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2
gameEvents.delete(64);

// Task 3
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// Task 4
for (const [min, event] of gameEvents) {
  const half = min < 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
/* for (const [key, value] of gameEvents) {
  if (key <= 45) {
    // console.log(`[FIRST HALF] ${key}: ${value}`);
  } else if (key >= 45) {
    // console.log(`[SECOND HALF] ${key}: ${value}`);
  }
} */
