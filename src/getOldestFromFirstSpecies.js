const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const obj = species.find((specie) => specie.id === animal).residents;
  return Object.values(obj.sort((a1, a2) => a1.age - a2.age)[obj.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
