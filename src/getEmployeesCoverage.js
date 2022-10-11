const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const test = (employer) => {
  let verify;
  if (!employer) verify = employees;
  else {
    verify = employees.filter((emp) => emp.firstName === employer.name
     || emp.lastName === employer.name || emp.id === employer.id);
  }
  return verify;
};

function getEmployeesCoverage(employer) {
  const verify = test(employer);
  if (verify[0] === 0) throw new Error('Informações inválidas');
  verify.forEach((value, index) => {
    const locations = []; const speciesss = [];
    console.log(value);
    value.responsibleFor.forEach((specieId) => {
      const specieFound = species.filter((specie) => specie.id === specieId)[0];
      speciesss.push(specieFound.name);
      locations.push(specieFound.location);
    });
    verify[index] = {
      fullName: `${value.firstName} ${value.lastName}`,
      species: speciesss,
      locations,
      id: value.id };
  });
  return verify.length === 1 ? verify[0] : verify;
}

module.exports = getEmployeesCoverage;
