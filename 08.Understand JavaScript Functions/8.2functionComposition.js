/*====================
08.Understand JavaScript Functions
CMD: [ node 8.2functionComposition.js ]
===================*/

function sum(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function times(a, b) {
	return a * b;
}

const a = 10;
const b = 20;

// const r1 = sum(a, b);
// console.log('R1', r1);
// const r2 = subtract(a, b);
// console.log('R2', r2);
const r = Math.abs(times(sum(a, b), subtract(a, b)));
console.log(r);