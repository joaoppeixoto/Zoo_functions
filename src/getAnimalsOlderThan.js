const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.filter((specie) =>
    specie.name === animal)[0].residents.every((bicho) => bicho.age >= age);
}
module.exports = getAnimalsOlderThan;
