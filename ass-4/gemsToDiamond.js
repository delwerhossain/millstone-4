function gemsToDiamond(x, y, z) {
    let valuesDefine = x + y + z;
    if (typeof (valuesDefine) === 'number') {
        let value1 = x * 21;
        let value2 = y * 32;
        let value3 = z * 43;
        let total = value1 + value2 + value3;
        if (total>= 2000 ) {
            let sum = total - 2000;
            return sum;
        }
        else if (total<2000) {
            return total;
        }

    }
    else {
        //error message
        let errorSMS = 'Please Enter Number';
        return errorSMS;
    }
}

let output = gemsToDiamond(100,1,1);
console.log(output);
