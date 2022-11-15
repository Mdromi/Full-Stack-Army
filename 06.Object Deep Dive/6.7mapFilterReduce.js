/*====================
06.Javascript Array and Object Deep Dive
CMD: [ node 6.7mapFilterReduce.js ]  
===================*/

const arr = [];
for (let i = 1; i < 5000000; i++) {
	arr.push(i);
}

console.time('not-optimized');
arr.filter((item) => item % 2 === 0).map((item) => item * 2);
console.timeEnd('not-optimized'); // 392.917ms

console.time('optimized');
arr.reduce((acc, cur) => {
	if (cur % 2 === 0) {
		acc.push(cur * 2);
	}
	return acc;
}, []);
console.timeEnd('optimized'); // 208.099ms