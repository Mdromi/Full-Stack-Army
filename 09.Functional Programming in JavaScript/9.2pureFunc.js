/*====================
09.Functional Programming in JavaScript
CMD: [ node 9.2pureFunc.js ]
===================*/

// Pure Function
function sum(a, b) {
	return a + b;
}

sum(10, 20); // 30

// Side Effect
let limit = 100;
function changeLimit() {
	limit = 500;
}

changeLimit(limit);
console.log(limit); // 500

// pure Function
const arr = [1, 2, 3]
function add(arr, data){
    arr.push(data);
}

// Impure Function
function log(msg) {
	console.log(msg);
}