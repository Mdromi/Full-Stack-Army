/*====================
04.Programming Fundamentals
CMD: [ node variable.js ]
===================*/

const names = ['Md Romi', 'Akash', 'Rakib', 'Siam'];
let index = -1;
let name = names[++index];

setInterval(() => {
    name = names[index++]
    console.log(name, name.length)

    if(index == names.length){
        index = 0;
    }
},1000)