const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toMatchObject(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('verifica se handlerElephants recebe os parametros corretamente', () => {
    expect(typeof handlerElephants(123)).toBe('string');
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('texto')).toBe(null);
  });
});
