const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  // part 1.1
  registerNewAnswer() {
    // const answer = prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`);
    const answer = 2;

    // part 1.2
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // part 4
    this.displayResults();
    this.displayResults("string");
  },

  // part 3
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

poll.registerNewAnswer();

// part 2
// document.querySelector("poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

// part 5
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
/* this works because the function is looking for this.answers so we had to make this equal to the outer array so we use the call method by creating new object */
