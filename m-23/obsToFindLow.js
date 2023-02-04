let phones = [
    { name: 'samsung', ram: 10, camera: 10, price: 27000 },
    { name: 'iphone ', ram: 10, camera: 10, price: 82000 },
    { name: 'xiomi', ram: 10, camera: 10, price: 42000 },
    { name: 'oppo', ram: 10, camera: 10, price: 52000 },
    { name: 'walton', ram: 10, camera: 10, price: 10000 }
];



function findCheapPhone(phones) {
    let cheapTest = phones[0].price;
    // return cheapTest
    for (let i = 0; i < phones.length; i++){
        let prices = phones[i].price;
        if (cheapTest>prices) {
            cheapTest = prices;
            console.log("")
        }
    }
    return cheapTest
}
let cheapPhone = findCheapPhone(phones);
console.log(cheapPhone);