/*====================
06.Javascript Array and Object Deep Dive
CMD: [ node 6.8reduce.js ]  
===================*/

function myReduce(array, cb, init){
    let acc = init;
    for (let i = 0 ; i < array.length; i++){
        acc = cb(acc, array[i], i, array);
    }

    return acc;
}

const sum = myReduce([1, 2, 3, 4], (a, b) => a + b, 0);
console.log(sum);

const arr = [1, 2, '', false, 3, NaN, false, 4, 5, NaN, 6];
const result = myReduce(
	arr,
	(acc, cur) => {
		if (cur) {
			acc.push(cur ** 2);
		}
		return acc;
	},
	[]
);
console.log(result);