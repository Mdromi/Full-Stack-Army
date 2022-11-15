/*====================
10.Asynchronous Programming in JavaScript
CMD: [ node  10.1asynchronous.js ]
===================*/

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

function main() {
	setTimeout(() => {
		console.log('load last');
	}, 10);

	setTimeout(() => {
		console.log('load first');
		test();
	}, 0);

	test();
}

function test() {
	console.log('test');
}

main();