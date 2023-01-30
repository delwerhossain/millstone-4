function startWork(x, y) {
    console.log("how many food u need ?")
    if (x >= 20) {
        console.log('you need total food = ', x)
        console.log('Then tk  = 40')
        if (y >= 40) {
            console.log('total TK = ', y, 'find')
            console.log('thanks and take your Food')
        }
        else {
            console.log('amount is too Low... sry')            
        }
    } 
    else {
        console.log('quntity too LOW ... sorry ....')
    }
}

startWork(20,40)