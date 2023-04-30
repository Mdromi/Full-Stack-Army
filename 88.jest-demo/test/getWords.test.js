const {getWords} = require('../src/getWords');

test('should throw an error if it is not a string', () => {
    expect(() => getWords(100)).toThrow();
    expect(() => getWords(true)).toThrow();
    expect(() => getWords(false)).toThrow();
    expect(() => getWords(null)).toThrow();
    expect(() => getWords(['name'])).toThrow();
    expect(() => getWords({name: 'words'})).toThrow();
});

test('should throw the same string if the argument is a word', () => {
    expect(getWords('Romi')).toBe('Romi');
    expect(getWords('JavaScript')).toBe('JavaScript');
    expect(getWords('Python')).toBe('Python');
    expect(getWords('Java')).toBe('Java');
});

test('should return the array of string', () => {
    const words1 = getWords('Md Romi');
    expect(words1).toHaveLength(2);
    expect(words1).toContain('Romi');

    const words2 = getWords('Test Driven Development');
    expect(words2).toHaveLength(3);
    expect(words2).toContain('Development');
});
