/*====================
04.Programming Fundamentals
CMD: [ node functions.js ]
===================*/
function nameOfFunction(name) {
	if (!name) {
		console.log('Please provide your name');
	} else {
		console.log('Hello', name);
	}
}

nameOfFunction('Murshed');
nameOfFunction('Fahim');
nameOfFunction();

function generateRandomNumber(min = 1, max) {
	const randomNumber = Math.floor(Math.random() * min + (max - min));
	return randomNumber;
}

console.log(generateRandomNumber(5, 10));