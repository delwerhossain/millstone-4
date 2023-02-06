function feetToInch(x) {
    if (typeof (x) == 'number') {
        // console.log(typeof (x));
        const toInch = x * 12;
        if (toInch % 1 === 0) {
            return toInch;
        }
        else {
            return toInch.toFixed(3);
        }
    }
    else {
        console.log("please enter the Number Value");
    }
}
let feet = feetToInch(54546.56);
console.log(feet);
