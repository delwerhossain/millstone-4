let shopping = [
    { name: 'samsung', price: 1 },
    { name: 'iphone', price: 2 },
    { name: 'xiomi', price: 1 },
    { name: 'oppo', price: 1 },
    { name: 'walton', price: 1 }
];
function shopingCart(shopping) {
    totalPrice = 0;
    for (let i = 0; i < shopping.length; i++) {
        let singlePrice = shopping[i].price
        totalPrice =singlePrice + totalPrice 
    }
    return totalPrice
}
let total = shopingCart(shopping);
console.log(total);