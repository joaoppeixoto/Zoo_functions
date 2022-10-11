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

  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Para os argumentos Monday e 13:00-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Para os argumentos Sunday e 09:b0-AM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Sunday', '09:b0-AM')).toThrow('The minutes should represent a number');
  });

  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção', () => {
    expect(() => getOpeningHours('Friday', '09:00- ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
