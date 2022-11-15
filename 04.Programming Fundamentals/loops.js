/*====================
04.Programming Fundamentals
CMD: [ node loops.js ]
===================*/

for (let i = 1; i <= 100; i++) {
	// it's a new js file,
	// we can write any valid js code here
	// every code written inside this block will execute multiple times
	console.log('Hello world!', i);
}

// There are total three types of loop available in JS
// 1. for (When we know the range)
// 1.1 Range
// 1.2 for in || working at arry or object
// 1.3 for of || working at arry, object or asynchronous task
// 2. while (When we don't know the range)
// 3. do while *

while (true) {
	let num = Math.ceil(Math.random() * 100);
	console.log('Hello World', num);
	if (num === 99) break;
}

do {
	console.log('It will run at least once');
} while (false);