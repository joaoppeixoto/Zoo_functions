const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se a função não receber parametros, retorna um objeto com todos os horários', () => {
    expect(getOpeningHours('')).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('retorna se o zoo está fechado segunda', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('retorna se o zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('retorna se o zoo está fechado quarta', () => {
    expect(getOpeningHours('Wednesday', '07:00-AM')).toBe('The zoo is closed');
  });
  it('testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
});
