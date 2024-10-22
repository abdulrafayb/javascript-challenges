const names = ["Rafay", "Adil", "Umar", "Momin", "Mantasha"];

const numberOfPeople = names.length;
const namesIndex = Math.floor(Math.random() * numberOfPeople);
const randomPerson = names[namesIndex];

console.log(randomPerson);
