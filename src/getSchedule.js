const data = require('../data/zoo_data');

const { hours, species} = data;

const weekDay = Object.keys(hours);
const total = () => {
  const objeto = weekDay.reduce((acc, elem) => {
    acc[elem] = {
      officeHour: `Open from ${hours[elem].open}am until ${hours[elem].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(elem)).map((a) => a.name),
    };
    return acc;
  }, {});
  objeto.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return objeto;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return total();
  }
  const verifica = species
    .some((cond) => scheduleTarget === cond.name);
  if (!verifica && !weekDay.includes(scheduleTarget)) {
    return total();
  }
  if (weekDay.includes(scheduleTarget)) {
    return { [scheduleTarget]: total()[scheduleTarget] };
  }
  return species.find((teste) => teste.name === scheduleTarget).availability;
}

module.exports = getSchedule;
