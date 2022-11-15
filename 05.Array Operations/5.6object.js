/*====================
05.Array Operations - Imperative vs Declarative
CMD: [ node 5.6object.js ]
===================*/

// Object Literal
const microphone = {
    brand: 'Fifine',
    idicator: true,
    price: 8000,
    color: 'Black',
    startRecording(){
        console.log('Recoding Started')
    },
    stopRecording: () => {
        console.log('Recoding Stoped')
    }, // inside object function is a Method

    toString(){
        return this.brand;
    }
}

// Object.freeze(microphone)
// microphone.newProperty = 'My New property';
// console.log(microphone)

// console.log(Object.keys(microphone));
// console.log(Object.values(microphone));

/* 
* There are two different parts in Object
* 1. Noun / Adjective (States / data / property / fiels)
* 2. Verb / (functionalities -> start, stop)
*/

// console.log(microphone.toString())

// Object Constructor Functions
// const testObj = new Object()
// testObj.name = 'Test Obj';
// testObj.time = new Date();
// console.log(testObj)

// console.log('My Microphone = ' + microphone) // My Microphone = Fifine

// for(let k in microphone){
//     console.log(k , microphone[k])
// }

// dot notation microphone.brand
// array notation microphone['brand']


const emty = {};
// console.log(Object.keys(emty).length == 0);

// console.log(Object.entries(microphone)); // object -> array

const array = [
    [ 'brand', 'Fifine' ],
    [ 'idicator', true ],
    [ 'price', 8000 ],
    [ 'color', 'Black' ],
];
console.log(Object.fromEntries(array)) // array -> object