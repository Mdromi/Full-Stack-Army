/*====================
04.Programming Fundamentals
CMD: [ node array.js ]
===================*/

const name1 = 'Rayhan';
const name2 = 'Alvi';
const name3 = 'Anik';
const name4 = 'Arjun';
const name5 = 'Ayman';

const students = [
	'Rayhan',
	'Alvi',
	'Anik',
	'Arjun',
	'Ayman',
	'Ayuub',
	'Bidyut',
];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

for (let i = 0; i < students.length; i++) {
	console.log(students[i], students[i].toLowerCase());
}

// name1.sendEmail();
// name2.sendEmail();
// name3.sendEmail();
// name4.sendEmail();
// name5.sendEmail();

const nums = [1, 2, 3, 4, 5, 6];
const bools = [true, true, false, false];
const nulls = [null, null, null];
const undefineds = [undefined, undefined, undefined];
const arrayOfArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const mixed = [true, null, 'Str', 5, [12, 2, 4]];

// CRUD
const CRUD = {
	C: Create,
	R: Read,
	U: Update,
	D: Delete
}

