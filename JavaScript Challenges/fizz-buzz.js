//multiple of a number mean when it is divided by a given number the remainder is zero

const array = [];

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    // or (i % 3 == 0 && i % 5 == 0)
    array.push("fizz");
  } else if (i % 3 == 0) {
    array.push("buzz");
  } else if (i % 5 == 0) {
    array.push("fizzBuzz");
  } else {
    array.push(i);
  }
}

console.log(array);
