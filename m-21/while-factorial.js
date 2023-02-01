function fact(num) {
    var i = 1
    var result = 1
    while (i <= num) {
        result = result * i
        i++
    }
    return result
    // console.log(result) 
}
let num = 5
const sum = fact(num)
console.log('factorial of', num, " : ", sum)

