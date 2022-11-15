/*====================
06.Javascript Array and Object Deep Dive
CMD: [ node 6.5arrayFilter.js ]
===================*/
const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];
// const filteredArr = numbers.filter((v) => v)
// const strs = filteredArr.map((v) => v.toString());
const strs = numbers.filter((v) => v).map((v) => v.toString())
console.log(strs);