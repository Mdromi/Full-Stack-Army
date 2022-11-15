/*====================
08.Understand JavaScript Functions
CMD: [ node 8.3funcValue.js ]
===================*/

/* 
    we can store functions in a variable
    we can store function inside an object / array
    we can pass function as an argument
    we can also return a function from another function
*/

function testFunction() {
	console.log('I am a test function');
}

const fn = testFunction;
console.log(fn);
fn(); // I am a test function

const arr = [fn, testFunction];
const obj = {
	fn: testFunction,
};

function fnArgument(fn) {
	return fn();
}
fnArgument(testFunction);

function returnFn() {
	return testFunction;
}