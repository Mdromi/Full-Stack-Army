/*====================
11.Async Iterator or Generator in JavaScript or Project Requirementst
CMD: [ node  11.iterator.js ]
===================*/

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
// 	// console.log(arr[i]);
// }

// let index = 0;
// function next(){
//     return arr[index++]
// }

// console.log(next()); // 1
// console.log(next()); // 2
// console.log(next()); // 3
// console.log(next()); // 4
// console.log(next()); // undefined

const channel = 'Stack';
console.log(channel[Symbol.iterator]); // [Function: [Symbol.iterator]]
console.log(channel[Symbol.iterator].toString()); // function [Symbol.iterator]() { [native code] }

const channelIterator = channel[Symbol.iterator]();
// console.log(channelIterator.next()); // { value: 'S', done: false }
// console.log(channelIterator.next()); // { value: 't', done: false }
// console.log(channelIterator.next()); // { value: 'a', done: false }
// console.log(channelIterator.next()); // { value: 'c', done: false }
// console.log(channelIterator.next()); // { value: 'k', done: false }
// console.log(channelIterator.next()); // { value: undefined, done: true }
// console.log(channelIterator.next()); // { value: undefined, done: true }

// for (const v of channel) {
// 	// console.log(v);
// }
/* 
S
t
a
c
k
*/


// while (true) {
// 	const data = channelIterator.next();
// 	if (data.done) {
// 		break;
// 	}
// 	console.log(data.value);
// }

const range = {
	start: 0,
	stop: 100,
	step: 5,
};

range[Symbol.iterator] = function () {
	let current = this.start;
	const stop = this.stop;
	const step = this.step;
	return {
		next() {
			const o = {
				value: current,
				done: current > stop,
			};
			current += step;
			return o;
		},
	};
};
const rangeIterator = range[Symbol.iterator]();
// console.log(rangeIterator.next()); // { value: 0, done: false }
// console.log(rangeIterator.next()); // { value: 5, done: false }
// console.log(rangeIterator.next()); // { value: 10, done: false }

for (let v of range) {
	console.log(v);
}