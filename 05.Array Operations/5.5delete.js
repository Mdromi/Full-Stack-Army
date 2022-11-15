/*====================
05.Array Operations - Imperative vs Declarative
CMD: [ node 5.5delete.js ]
===================*/

const arr = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40},
    {id: 5, value: 50},
];

// splice -> mutable -> effect the orjinal array
// const index = arr.findIndex((item) => item.id == 4);
// const arr1 = arr.splice(index, 1);
// console.log(arr1, arr)

// filter -> immutable -> No effects the orjinal array
const arr2 = arr.filter((item) => item.id != 4)
console.log(arr)
console.log(arr2)
