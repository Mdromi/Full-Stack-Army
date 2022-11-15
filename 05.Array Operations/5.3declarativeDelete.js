/*====================
05.Array Operations - Imperative vs Declarative
CMD: [ node 5.3declarativeDelete.js ]
===================*/
const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

const filterArray = arr.filter(function (v) {
    return typeof v == 'number';
});
// console.log(filterArray);

function fib(n){
    if(n == 0 || n == 1){
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(55));