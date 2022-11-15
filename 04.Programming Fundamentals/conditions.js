/*====================
04.Programming Fundamentals
CMD: [ node conditions.js ]
===================*/

if (studyBasic) {
	wontJoin();
}

if (studyAdvanced) {
	join();
}

if (teacherSpeaks) {
	silent();
}

if (!teacherSpeaks) {
	shout();
}

// Scenario 1 - Single branch
// if condition
if (hasMoney) {
	buyPhone();
}

// Scenario 2 - Two branches
// if else condition
if (toss === 'head') {
	win();
} else {
	loss();
}

// Scenario 3 - Multiple branches
// else if
if (1 > 1) {
	big();
} else if (1 < 1) {
	small();
} else {
	same();
}