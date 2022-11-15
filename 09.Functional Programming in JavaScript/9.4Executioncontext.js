/*====================
09.Functional Programming in JavaScript
CMD: [ node  9.4Executioncontext.js ]
===================*/

function A(a) {
	console.log('I am A');
}

function B() {
	A();
}

function C() {
	B();
	B();
}
function D() {
	C();
	A();
}

D();