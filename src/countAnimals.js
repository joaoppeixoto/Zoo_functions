const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const qtdAnimals = {};
  species.forEach((specie) => {
    qtdAnimals[specie.name] = specie.residents.length;
  });
  if (!animal) return qtdAnimals;
  if (animal.sex) {
    return species.filter((specie) => specie.name === animal.specie)[0]
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
  if (animal.specie) return qtdAnimals[animal.specie];
}

module.exports = countAnimals;
