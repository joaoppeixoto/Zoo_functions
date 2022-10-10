const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return hours;

}
module.exports = getSchedule;
