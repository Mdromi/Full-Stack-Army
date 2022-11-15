/*====================
06.Javascript Array and Object Deep Dive
CMD: [ node 6.2objectOverArray.js ]
===================*/

/**
 * Store 10 students information
 * - name
 * - email
 * - id
 */

/**
 *
 * a utility to create a random id
 */

 function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
// console.log(uuidv4())

const students = {
    '6112e837-6aec-43dd-8758-30e44d1ba9a8': {
        id: '6112e837-6aec-43dd-8758-30e44d1ba9a8',
        name: 'MD Romi',
        email: 'mdromi@gmail.com'
    },
    'd89f552e-d05d-49b7-bffa-922f016618c4': {
        id: 'd89f552e-d05d-49b7-bffa-922f016618c4',
        name: 'Akib Ahmed',
        email: 'akibahmed@gmail.com'
    },
    'b5385396-4ae9-4fc2-b1d2-4148e057b6d9': {
        id: 'b5385396-4ae9-4fc2-b1d2-4148e057b6d9',
        name: 'Elias Emon',
        email: 'eliasemon@gmail.com'
    }
}

/**
 * 1. Easily Traverse [O(n)]
 * 1.1 Get anything if you have the key [O(1)]
 * 2. Filter
 * 3. Delete (medium) [O(1)]
 * 4. Update (medium) [O(1)]
 * 5. Create a new one (easy task) [O(1)]
 */

// create
const std = {
    id: uuidv4(),
    name: 'Firoz Ahmed',
    email: 'firozahmed@gmail.com'
}
students[std.id] = std

// update
const idToBeUpdated = 'd89f552e-d05d-49b7-bffa-922f016618c4';
const updatedData = {
	name: 'HM Azizul',
	email: 'azizul@test.com',
};

students[idToBeUpdated] = {
    ...students[idToBeUpdated],
    ...updatedData

}

// delete
delete students[idToBeUpdated];

// Get
// console.log(students['6112e837-6aec-43dd-8758-30e44d1ba9a8']);

// Traverse
for (let key in students) {
	console.log(students[key]);
}

// console.log(students)

// Object.keys(students).forEach((key) => {
//     const student = students[key]
//     console.log(student.name, student.email)
// })

Object.values(students).forEach((student) => {
    console.log(student.name, student.email)
})