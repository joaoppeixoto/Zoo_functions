const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === 0) return [];
  return species.filter((name) => ids.some((id) => name.id === id));
}

module.exports = getSpeciesByIds;
