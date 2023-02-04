let numValue = [45, 87, 96, 11, 63, -56, 71, 28];
function onlyPositive(x) {
    let newPositiveValue = [];
    for (let i = 0; i < x.length; i++){
        if (Math.sign(x[i]) == 1) {
            newPositiveValue.push(x[i]);
            
        }
        else {
            break;
        }
    }
    return newPositiveValue;
}

let outPut = onlyPositive(numValue); 
console.log(outPut);