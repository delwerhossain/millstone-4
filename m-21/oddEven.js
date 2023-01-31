function isEven(x) {
    let reminder = x % 2;
    if (reminder === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isEven(21))