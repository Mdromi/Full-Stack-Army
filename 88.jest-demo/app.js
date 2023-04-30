const add = (a, b) => {

    if((typeof a !== 'number') || (typeof b !== 'number')) throw new Error('Invalid Argument Type');
    return a + b;
}

const isEven = (number) => {
    if(typeof number !== 'number') throw new Error('Invalid Argument Type');

    return number % 2 == 0;
}

module.exports = {
    add,
    isEven
}