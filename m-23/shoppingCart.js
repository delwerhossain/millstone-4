let shopping = [
    { name: 'samsung', price: 1 , quantity :5},
    { name: 'iphone', price: 2 , quantity :2},
    { name: 'xiomi', price: 1 , quantity :4},
    { name: 'oppo', price: 1 , quantity :6},
    { name: 'walton', price: 1 , quantity :16}
];
function shopingCart(shopping) {
    totalPrice = 0;
    for (let i = 0; i < shopping.length; i++) {
        let singlePrice = shopping[i].price
        let quantity = shopping[i].quantity
        let quantityPrice = singlePrice * quantity
        totalPrice = quantityPrice + totalPrice

    }
    return totalPrice
}
let total = shopingCart(shopping);
console.log(total);