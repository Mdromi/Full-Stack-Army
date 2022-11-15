/*====================
06.Javascript Array and Object Deep Dive
CMD: [ node 6.6arrayReduce.js ]  
===================*/

// const numbers = [1, 2, 3, 4, 5, 6];
// const sum = numbers.reduce((a, b) => a + b);
// console.log(sum);

/**
 * Map -> [same length as the original array]
 * Filter -> [with filtered item]
 * Reduce -> No one knows.(Only you know) all possible value
 */

// we want this -> '1234falseNaN56'
const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];

const result = numbers.reduce((acc, cur, index) => {
    if(index == 0) acc += '[';
    if(cur){
        acc += cur.toString() + (index < numbers.length -1 ? ', ' : '');
    }
    if(index == numbers.length -1) acc += ']';

    return acc;
}, '');

console.log(result)


// const result = numbers.reduce((acc, cur) => {
// 	if (cur) {
// 		acc.push(cur.toString());
// 	}
// 	return acc;
// }, []);
// console.log(result);