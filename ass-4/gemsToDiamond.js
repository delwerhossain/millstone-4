//----------- problem - 5 --------------
function gemsToDiamond(x = 0, y = 0, z = 0) {
    //for find all number value
    let valuesDefine = x + y + z;
    // condition for Number value or not 
    if (typeof (valuesDefine) === 'number') {
        // total sum part
        let value1 = x * 21;
        let value2 = y * 32;
        let value3 = z * 43;
        // total value
        let total = value1 + value2 + value3;
        //  diamond compare of 1000 * 2 
        if (total >= (1000 * 2)) {
            //  diamond minus of 1000 * 2 

            let sum = total - (1000 * 2);
            return sum;
        }
        // other wise output
        else if (total < (1000 * 2)) {
            return total;
        }

    }
    else {
        //error message
        let errorSMS = 'Please all Enter Number';
        return errorSMS;
    }
}

// let output = gemsToDiamond(1, 1, 1);
// console.log(output);
