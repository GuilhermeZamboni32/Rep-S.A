const Calculadora = require('./Calc');
describe('Testes da classe Calculadora', () => {
    let calc;
    // Comando para executar antes de cada teste
    beforeEach(() => {
    calc = new Calculadora();
    });
    test('CT001 (passa) - Somar 2 + 3 = 5', () => {
    expect(calc.somar(2, 3)).toBe(5);
    });
    test('CT002 (falha) - Somar 2 + 4 = 5', () => {
    expect(calc.somar(2, 4)).toBe(5);
    });
    test('CT003 (passa) - Subtrair 5 - 2 = 3', () => {
    expect(calc.subtrair(5, 2)).toBe(3);
    });
    test('CT004 (falha) - Subtrair 5 - 2 = 3', () => {
    expect(calc.subtrair(5, 2)).toBe(4);
    });
    test('CT005 (passa) - Multiplicar 4 * 3 = 12', () => {
    expect(calc.multiplicar(4, 3)).toBe(12);
    });
    test('CT006 (falha) - Multiplicar 4 * 5 = 12', () => {
    expect(calc.multiplicar(4, 5)).toBe(12);
    });
    test('CT007 (passa) - Dividir 10 / 2 = 5', () => {
    expect(calc.dividir(10, 2)).toBe(5);
    });
    test('CT008 (falha) - Dividir 10 / 2 = 6', () => {
    expect(calc.dividir(10, 2)).toBe(6);
    });
    test('CT009 (passa) - Divisão por zero = erro', () => {
    expect(() => calc.dividir(5, 0)).toThrow('Divisão por zero');
    })})
        