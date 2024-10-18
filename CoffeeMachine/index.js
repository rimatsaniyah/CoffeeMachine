//const {coffeeStock, isCoffeeMachineReady }= require('./state');

/*console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");*/

/*const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams){
        console.log("Kopi berhasil dibuat!");
    }
    else{
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta",80);*/

/*console.log(coffeeStock);
console.log(isCoffeeMachineReady);*/

import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';

/*const displayStock = stock => {
    for (const type in stock){
        console.log(type);
    }
}

displayStock(coffeeStock);*/

console.log(stock);
console.log(isCoffeeMachineReady);

//Using Package

import _ from 'lodash';

//penjumlahan Array
/*const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);*/

//menggunakan fungsi reduce

/*const myArray = [1, 2, 3, 4];
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum);
*/

//Dengan lodash, kita dapat meringkas kode menjadi seperti ini:
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum);
