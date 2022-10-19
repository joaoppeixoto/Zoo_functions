const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployer = (employer) => {
  let verify = employees;
  if (employer === undefined) return verify;
  if (employees === 0) throw new Error('Informações inválidas');
  verify = employees.filter((emp) => emp.firstName === employer.name
     || emp.lastName === employer.name || emp.id === employer.id);
  return verify;
};
function getEmployeesCoverage(employer) {
  const verify = getEmployer(employer);
  verify.forEach((value, index) => {
    const objAuxiliar = { species: [], locations: [] };
    value.responsibleFor.forEach((specieId) => {
      const specieFound = species.filter((specie) => specie.id === specieId)[0];
      objAuxiliar.species.push(specieFound.name);
      objAuxiliar.locations.push(specieFound.location);
    });
    verify[index] = { ...objAuxiliar,
      fullName: `${value.firstName} ${value.lastName}`,
      id: value.id };
  });
  return verify.length === 1 ? verify[0] : verify;
}

module.exports = getEmployeesCoverage;
