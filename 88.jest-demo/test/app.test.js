const {add, isEven} = require('../app')

test('should return correct addition value', () => {
    expect(add(2, 3)).toEqual(5);
    expect(add(3, 8)).toEqual(11);
    expect(add(80, 3)).toEqual(83);
});

test('should throw an error if arguments are not number', () => {
    expect(() => add('A', 10)).toThrow();
});

test('isEven() should return true', () => {
    expect(isEven(10)).toBe(true);
    expect(isEven(20)).toBe(true);
    expect(isEven(30)).toBe(true);
    expect(isEven(16)).toBe(true);
    expect(isEven(8)).toBe(true);
});

test('isEven() should return false', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(9)).toBe(false);
    expect(isEven(11)).toBe(false);
    expect(isEven(13)).toBe(false);
});

test('isEven() should throw an error', () => {
    expect(() => isEven('10')).toThrow();
    expect(() => isEven(true)).toThrow();
    expect(() => isEven(false)).toThrow();
    expect(() => isEven(undefined)).toThrow();
    expect(() => isEven(null)).toThrow();
    expect(() => isEven([])).toThrow();
    expect(() => isEven({})).toThrow();
});