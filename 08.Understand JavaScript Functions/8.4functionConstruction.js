/*====================
08.Understand JavaScript Functions
CMD: [ node 8.4functionConstruction.js ]
===================*/

function strToObj(str) {
	let obj = {};
	for (let s of str) {
		if (s !== ' ') {
			obj[s] = s;
		}
	}
	return obj;
}
console.log(strToObj('HM Nayem')); // { H: 'H', M: 'M', N: 'N', a: 'a', y: 'y', e: 'e', m: 'm' }

const newFn = new Function(
	'str',
	`let obj = {};
    for (let s of str) {
        if (s !== ' ') {
            obj[s] = s;
        }
    }
    return obj;`
);

console.log(newFn('HM Nayem'));


const fData = {
	params: ['a', 'b'],
	body: ['const r = a + b', 'return r'],
};

const fBody = fData.body.reduce((acc, cur) => {
	acc += cur + ';';
	return acc;
}, '');

const tf = new Function(...fData.params, fBody);
console.log(tf(100, 200)); // 300






const greetFn = new Function(
	'name',
	'email',
	`
	const fName = name.split(' ')[0];
	console.log('Hello,', fName, 'Is that your email?', email);
	console.log('Yeah, this is mine.');
	return fName;
	`
);

console.log(typeof greetFn); // function
console.log(greetFn.toString());
/* 
function anonymous(name,email) {
        const fName = name.split(' ')[0];
        console.log('Hello,', fName, 'Is that your email?', email);
        console.log('Yeah, this is mine.');
        return fName;
}
*/
const fName = greetFn('HM Nayem', 'nayem@gmail.com');
/* 
Hello, HM Is that your email? nayem@gmail.com
Yeah, this is mine.
*/
console.log('First Name:', fName); // First Name: HM

const operations = [
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a + b",a + b)',
	},
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a - b",a - b)',
	},
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a * b",a * b)',
	},
	{
		args: [],
		params: [],
		body: 'console.log("Hello World! No params, no args")',
	},
	{
		args: [5],
		params: ['n'],
		body: `
			for (let i = 0; i < n; i++) {
				let line = '';
				for (let j = 0; j < n; j++) {
					line += '* ';
				}
				console.log(line);
			}
		`,
	},
];

operations.forEach((operation) => {
	const fn = new Function(...operation.params, operation.body);
	fn(...operation.args);
});