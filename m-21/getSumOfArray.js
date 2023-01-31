// let x = [23, 23, 52, 55, 86, 755, 342, 131, 100, 424, 213]
let s = 0
function sumOfArray() {
    for (let i = 0; i < x.length; i++){
        // console.log(x[i])
        let index = x[i]
        s = s + index
        // console.log(s)
    }
    let total = s

}

// let x = [23, 23, 52, 55, 86, 755, 342, 131, 100, 424, 213]
function isOdd() {
    const even = [];
    const odd = [];
    for (let i = 0; i < x.length; i++){
        // console.log(x[i])
        const index = x[i];
        if (index % 2 !== 0) {
            odd.push(index);
            // console.log(index)
        }
        else {
            even.push(index);
        }
    }
    return odd 
}

let x = [23, 23, 52, 55, 86, 755, 342, 131, 100, 424, 213]
let oddNum = isOdd(x);
console.log(oddNum);