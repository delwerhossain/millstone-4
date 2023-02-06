
function centimeterToMeter(x) {
    if (typeof (x) === 'number') {
        const toMeter = x / 100;
        if (toMeter % 1 === 0) {
            return toMeter;
        }
        else {
            return toMeter.toFixed(3);
        }
    }
    else {
        console.log("please enter the Number Value");
    }    
}
let meter = centimeterToMeter(1000.55);
console.log(meter)