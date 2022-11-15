/*====================
05.Array Operations - Imperative vs Declarative
CMD: [ node 5.1imperativeArr.js ]
===================*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum)

// const cb = () => {
//     console.log('Hello');
// };
// numbers.forEach(cb )

// forEach function like for loop
// numbers.forEach(function (_, __, arr) // when we don't need to first or second arguments 
// numbers.forEach(function (value, index, arr) {
//     // console.log('Hello');
//     // console.log(arguments);
//     // console.log(value, index, arr);

//     if(value % 2 == 0){
//         console.log( value)
//     }
// });


let sum = 0;
numbers.forEach(function (v, i) {
    if(i < 3){
        sum += v;
    }
});
console.log(sum);

