/*====================
06.Javascript Array and Object Deep Dive
CMD: [ node 6.3objectArray.js ]
===================*/

const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++) {
	const o = {
		id: i,
		value: i,
	};
	arr.push(o);
	arrToObj[i] = o;
}

console.time('array');
// let id = 4999999
// const obj = arr.find((item) => item.id == id)
// obj.value = 555

arr.unshift({
    id: 5000000,
    value: 5000000,
})
console.timeEnd('array') // 19.654ms

console.time('obj')
// arrToObj[id].value = 999
arrToObj[5000000] = {
    id: 5000000,
    value: 5000000,
}
console.timeEnd('obj') // 0.02ms

console.time('array');
const index = arr.findIndex((item) => item.id == 4000000);
arr.splice(index, 1)
console.timeEnd('array') // 104.059ms

console.time('obj')
delete arrToObj[4000000]

console.timeEnd('obj') // 0.013ms