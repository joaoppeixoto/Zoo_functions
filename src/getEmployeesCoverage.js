const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployer = (employer) => {
  let verify = employees;
  if (employer === undefined) return verify;
  verify = employees.filter((emp) => emp.firstName === employer.name
  || emp.lastName === employer.name || emp.id === employer.id);
  return verify;
};

const getEmployerSpecies = (employer) => {
  const objAuxiliar = { species: [], locations: [] };
  employer.responsibleFor.forEach((specieId) => {
    const specieFound = species.filter((specie) => specie.id === specieId)[0];
    objAuxiliar.species.push(specieFound.name);
    objAuxiliar.locations.push(specieFound.location);
  });
  return objAuxiliar;
};
function getEmployeesCoverage(employer) {
  const verify = getEmployer(employer);
  if (!verify.length) throw new Error('Informações inválidas');
  else {
    const test = verify.map((value, index) =>
      ({ ...getEmployerSpecies(value),
        fullName: `${value.firstName} ${value.lastName}`,
        id: value.id }));
    return test.length === 1 ? test[0] : test;
  }
}
module.exports = getEmployeesCoverage;
