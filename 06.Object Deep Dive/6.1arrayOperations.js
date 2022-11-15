/*====================
06.Javascript Array and Object Deep Dive
CMD: [ node 6.1arrayOperations.js ]
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

const students = [
    {
        id: '6112e837-6aec-43dd-8758-30e44d1ba9a8',
        name: 'MD Romi',
        email: 'mdromi@gmail.com'
    },
    {
        id: 'd89f552e-d05d-49b7-bffa-922f016618c4',
        name: 'Akib Ahmed',
        email: 'akibahmed@gmail.com'
    },
    {
        id: 'b5385396-4ae9-4fc2-b1d2-4148e057b6d9',
        name: 'Elias Emon',
        email: 'eliasemon@gmail.com'
    }
]

// 

/**
 * 1. Easily Traverse
 * 2. Filter
 * 3. Delete (medium) [splice -> O(n), filter -> O(n)]
 * 4. Update (medium) (easy) [push -> O(n)]
 * 5. Create a new one (easy task) [push -> O(1), unshift -> O(n)]
 */

// Create a new student
students.push({
    id:uuidv4(),
    name: 'Fahim Faysal',
    email: 'fahimfaysal@gmail.com'
});

// Update
const idToUpdate = 'b5385396-4ae9-4fc2-b1d2-4148e057b6d9';
const updateData = {
    name: 'Habiba Akther',
    email: 'habibaakther@gmail.com'
}
let updatedIndex = students.findIndex((item) => item.id == idToUpdate)
// console.log(updateObj)

students[updatedIndex] = {
    ...students[updatedIndex],
    ...updateData
}
// console.log('Updated ',students)

// delete
students.splice(updatedIndex, 1)
//  console.log('Deleted ',students)


//  forEach, map, filter, every, reduce, some, find, findIndex

// for(let i = 0; i < students.length; i++){
//     console.log(students[i].name);
// }

// for(let i in students){
//     console.log(students[i].name)
// }

for(let student of students){
    console.log(student.name)
}