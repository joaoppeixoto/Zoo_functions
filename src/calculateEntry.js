const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18);
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50);
  const senior = entrants.filter((person) => person.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  let sum = 0;
  const qtdEntrants = countEntrants(entrants);
  Object.keys(qtdEntrants).forEach((person) => {
    sum += qtdEntrants[person] * prices[person];
  });
  return sum;
}

module.exports = { calculateEntry, countEntrants };
