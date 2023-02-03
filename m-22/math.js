let x = 25
let y = 45
let gap = Math.abs(x - y)
if (gap <= 5) {
    // console.log('you guys can be friend')
}
else {
    // console.log('No stay apart ')
}

// to the power --------------
const toPow = Math.pow(2, 6)
// console.log(toPow)

// math round --------------
const mathRound = Math.round(2.5)
const mathRound1 = Math.round(2.49)
// console.log('math round  :',mathRound, mathRound1)


// ------------------------
// float to round in upper
// ------------------------
const celi = Math.ceil(2.5)
// console.log('float to round in upper : ', celi)


// ------------------------
// float to round in Lower
// ------------------------

const floor = Math.floor(2.5)
// console.log('float to round in Lower : ', floor)



// -----------------------
//          random 
// ------------------------
for (i = 1; i <= 10; i ++) {
    const random = Math.random() * 10
    const xRandom = Math.round(random)
    console.log(i,"No. : ",xRandom)
}