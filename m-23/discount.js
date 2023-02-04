function discount(ticket) {
    let first100 = 100;
    let secend100 = 80;
    let third100 = 70;
    
    if (ticket <=100) {
        let totalPrice = ticket * first100;
        return totalPrice;
    }
    else if (ticket <= 200) {
        let firstPrice = 100 * first100;
        let secPrice = (ticket - 100) * secend100;
        let totalPrice = firstPrice + secPrice;
        return totalPrice;
        
    }
    else {
        let firstPrice = 100 * first100;
        let secPrice = 100 * secend100;
        let thirdPrice = (ticket - 200) * third100;
        let totalPrice = firstPrice + secPrice + thirdPrice;
        return totalPrice;
        
    }
}

let totalTic = discount(20100)
console.log(totalTic)