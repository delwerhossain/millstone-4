// 5 = 5*4*3*2*1
// 6 = 6*5*4*3*2*1
// 7 = 7*6*5*4*3*2*1

function factorial(x) {
    let sum = 1
    for (var i = 1; i <= x; i++) {
        sum = sum * i;
        // console.log(total)
    }
    console.log(sum)
}
// factorial(5)

// ------------------------------
// reverse factorial

function reFactorial(x) {
    let sum = 1
    for (var i = x; i >= 1; i--) {
        sum = sum * i;
        // console.log(i)
    }
    console.log(sum)
}
reFactorial(5)