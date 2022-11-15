/*====================
08.Understand JavaScript Functions
CMD: [ node 8.1function.js ]
===================*/

function name_of_the_function(/** Input something  */) {
	// Function body
	// any valid js code
	// return a result
}

/**
 * * Name: Human_Lifecycle
 * * Param: human_name
 * * :human_name, awake from sleep
 * * :human_name, go to washroom
 * * :human_name, take breakfast
 * * :human_name, go to school/college/office
 * * :human_name, Return from office
 * * :human_name, Take dinner
 * * :human_name", Go to sleep
 */

// Call Human_Lifecycle for 'Abu Musa'
// Call Human_Lifecycle for 'Easin Islam'
// Call Human_Lifecycle for 'Saiful Islam'
// Call Human_Lifecycle for 'Akib Ahmed'
// Call Human_Lifecycle for 'Alamin Mir'

/**
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */

/**
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */

/**
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */

/**
 * Function: Walk
 * Param: name
 * Param: Destination
 * Definition: How to walk
 */

/**
 * Function: Study
 * Param: name
 * Definition: How to study
 */

/**
 * Function: Work
 * Param: name
 * Definition: How to work
 */

/**
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Walk -> name, 'office'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Walk -> name, 'home'
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

/**
 * Function: Student Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Study -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

// Students_Lifecycle -> 'Faruk'
// Students_Lifecycle -> 'Elias'
// Students_Lifecycle -> 'Faisal'

// Job_Holder_Lifecycle -> 'Musa'
// Job_Holder_Lifecycle -> 'Akib'
// Job_Holder_Lifecycle -> 'Bipon'


function sleep(name) {
	console.log(`${name} is sleeping`);
}

function awake(name) {
	console.log(`${name} is awake`);
}

function eat(name, time) {
	console.log(`${name} is taking ${time}`);
}

function walk(name, destination) {
	console.log(`${name} is walking to ${destination}`);
}

function study(name) {
	console.log(`${name} is studying`);
}

function work(name) {
	console.log(`${name} is working`);
}

function jobHolderLifecycle(name) {
	awake(name);
	eat(name, 'breakfast');
	walk(name, 'office');
	work(name);
	eat(name, 'lunch');
	walk(name, 'home');
	eat(name, 'dinner');
	sleep(name);
}

function studentsLifecycle(name) {
	awake(name);
	eat(name, 'breakfast');
	study(name);
	eat(name, 'lunch');
	study(name);
	eat(name, 'dinner');
	sleep(name);
}




// function testFunction() {
// 	const a = 10;
// 	const b = 20;
// 	const result = a + b + Math.max(a, b);
// 	console.log(result);
// }

// testFunction();

function testFunction(a = 10, b = 20) {
	const result = a + b + Math.max(a, b);
	console.log(result);
}
testFunction(100, 200); // Here 100 and 200 are arguments

