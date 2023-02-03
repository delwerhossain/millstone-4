let x = [78, 458, 88, 85, 54, 9, 96, 2, 36, 54, 55, 5, 66, 5, 54, 56,];
function removeDuplicate() {
    let uniqueValue = [];
    for (let i = 0; i < x.lenght; i++) {
        let singlePic = x[i];
        let checkValue = uniqueValue.includes(singlePic);
        if ( checkValue === false) {
            uniqueValue.push(singlePic);
        }
    }
    return uniqueValue;
}
let y = removeDuplicate(x);
console.log(y);
// removeDuplicate();