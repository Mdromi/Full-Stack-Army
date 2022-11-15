/*====================
06.Javascript Array and Object Deep Dive
CMD: [ node 6.10nameArray.js ]  
===================*/

const names = [
	'Ayman',
	'Abu Rayhan',
	'Anik',
	'Elias Emon',
	'Engr. Sabbir',
	'Fahim Faisal',
	'Feroz Khan',
	'Habib',
	'HM Azizul',
	'Hridoy Saha',
	'Jahid Hassan',
	'Johir',
	'Md Al-Amin',
	'Md Arafatul',
	'Md Ashraful',
	'Parvez',
];

// const namesGroup = {
// 	A: ['Ayman', 'Abu Rayhan', 'Anik'],
// 	E: ['Elias Emon', 'Engr. Sabbir'],
// 	F: ['Fahim Faisal', 'Feroz Khan'],
// }

const namesGrouped = names.reduce((acc, cur) => {
    const firatLetter = cur[0].toUpperCase();
    if(firatLetter in acc){
        acc[firatLetter].push(cur);
    } else {
        acc[firatLetter] = [cur];
    }

    return acc;
}, {});

Object.keys(namesGrouped).forEach((groupKey) => {
    console.log('-----------', groupKey, '-----------');
    namesGrouped[groupKey].forEach((name) => console.log(name));
    console.log()
});