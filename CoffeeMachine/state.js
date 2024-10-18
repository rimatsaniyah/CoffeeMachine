const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

/*const isCoffeeMachineReady = true;

module.exports = coffeeStock; //membuat object coffeeStock ditetapkan sebagai nilai. Nilai properti exports ini nantinya bisa di-import dan digunakan pada berkas JavaScript lain.
module.exports = isCoffeeMachineReady; //menginisialisasikan ulang nilai properti module.exports sehingga nilai yang di-export hanya variabel isCoffeeMachineReady.
module.exports = {coffeeStock, isCoffeeMachineReady}; */

//export default coffeeStock;

const isCoffeeMachineReady = true;

export {coffeeStock, isCoffeeMachineReady};


