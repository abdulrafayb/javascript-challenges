"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const carOne = new Car("BMW", 120);
const carTwo = new Car("Mercedes", 95);

carOne.accelerate();
carOne.brake();
carOne.accelerate();
carOne.accelerate();
carOne.brake();
