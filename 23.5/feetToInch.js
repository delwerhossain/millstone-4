function feetToInch(x) {
    if (typeof (x) == 'number') {
        // console.log(typeof (x));
        const toInch = x * 12;
        return toInch.toFixed(3);
    }
    else {
        console.log("please enter the Number Value");
    }
}
let feet = feetToInch("dax");
console.log(feet);
