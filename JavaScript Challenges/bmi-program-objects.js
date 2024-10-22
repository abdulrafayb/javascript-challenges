const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calculateBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calculateBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (markMiller.calculateBMI() > johnSmith.calculateBMI()) {
  console.log(
    `${markMiller.firstName} BMI ${markMiller.calculateBMI()} is higher than ${
      johnSmith.firstName
    } ${johnSmith.calculateBMI()}!`
  );
} else if (johnSmith.calculateBMI() > markMiller.calculateBMI()) {
  console.log(
    `${johnSmith.firstName} BMI ${johnSmith.calculateBMI()} is higher than ${
      markMiller.firstName
    } ${markMiller.calculateBMI()}!`
  );
} else {
  console.log(
    `Both ${markMiller.firstName} and ${
      johnSmith.firstName
    } have the same ${markMiller.calculateBMI()} and ${johnSmith.calculateBMI()} BMI's`
  );
}
