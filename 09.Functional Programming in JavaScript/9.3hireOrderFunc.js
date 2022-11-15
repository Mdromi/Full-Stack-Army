/*====================
09.Functional Programming in JavaScript
CMD: [ node  9.3hireOrderFunc.js ]
===================*/

/* 
    Function can be passed as an argument.
    Function can be returned from another function.
*/

/* 
Hidden Concept
* - Scope
* - Closure
* - Execution context
* - Hosting
*/

function sum(a, b) {
	const r = a + b;
	return r;
}

function randomSum(max){
    // const random1 = Math.floor(Math.random() * max)
    // const random2 = Math.floor(Math.random() * max)

    const {random1, random2} = generateTwoNumbers();

    return random1 + random2;
}

function randomSub(max){
    // const random1 = Math.floor(Math.random() * max)
    // const random2 = Math.floor(Math.random() * max)

    const {random1, random2} = generateTwoNumbers();

    return random1 - random2;
}

function randomSqrSum(max){
    // const random1 = Math.floor(Math.random() * max)
    // const random2 = Math.floor(Math.random() * max)

    const {random1, random2} = generateTwoNumbers();

    return random1*random1 + random2*random2;
}

// DRY -> Dont't Repead Yourself
// Function can be passed as an argument.
function generateTwoNumbers(max){
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)

    return {
        random1,
        random2
    }
}

function HgenerateTwoNumbers(max, cb){
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)

    const result = cb(random1, random2)
    return result
}

HgenerateTwoNumbers(100, (rand1, rand2) => {
    console.log(rand1, rand2)
})

// console.log(HgenerateTwoNumbers(1000, (rand1, rand2) => rand1 + rand2))
// console.log(HgenerateTwoNumbers(10, (rand1, rand2) => rand1 - rand2))
// console.log(HgenerateTwoNumbers(10, (rand1, rand2) => rand1 * rand2))
// console.log(HgenerateTwoNumbers(100, (rand1, rand2) => rand1*rand1 + rand2*rand2))

// Function can be returned from another function.

// function sqr(a) {
// 	return a * a;
// }

// function cube(a) {
// 	return a * a * a;
// }

function power(p){
    return function(n){
        let result = 1;

        for(let i = 1; i < p; i++){
            result *= n;
        }
        return result;
    }

}

const sqr = power(2);
const cube = power(3);
const power8 = power(8);

console.log('SQR', sqr); // SQR [Function (anonymous)]
console.log('cube', cube); // cube [Function (anonymous)]
console.log('power8', power8); // power8 [Function (anonymous)]

console.log('SQR', sqr(2)); // SQR 4
console.log('cube', cube(2)); // cube 8
console.log('power8', power8(2)); // power8 256
console.log(power(10)(2))

// Lexing / parsing / tokenize -> compile -> run

// Global Scope
// Local Scope
// Block Scope