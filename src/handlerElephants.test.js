const handlerElephants = require('./handlerElephants');
const { species } = require('../data/zoo_data');

describe('Essa função retorna informações referentes aos elefantes conforme o argumento passado', ( => {
    it('Retorna a quantidade de elefantes', ()=> {
        const count = species.filter((specie) => specie.residents.length);
        expect(handlerElephants(count)).toBe(4);
    });}))