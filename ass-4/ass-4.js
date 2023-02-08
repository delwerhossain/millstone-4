//----------- problem - 1 --------------





function mindGame(x) {
    // x is input parameter
    // validation for number
    if (typeof (x) === 'number') {
        //main part of equation 
        let sum = (((x * 3) + 10) / 2) - 5;
        // return the value 
        return sum;
    }
    

    else {
        //error message
        let errorSMS = 'Please Enter Number';
        return errorSMS;
    }
}
// let output = mindGame(33);
// console.log(output);




//----------- problem - 2 --------------
function evenOdd(x) {
    // x is input parameter
    // validation for string
    if (typeof (x) === 'string') { 
        // strinf length count
        let len = x.length;
        // condition part for odd even 
        if (len%2===0) {
            let even = 'even';
            return even;
        }

        //odd part 
        else {
            let odd = 'odd';
            return odd;
        }
    }
    else {
        //error message
        let errorSMS = 'Please Enter string / sentence';
        return errorSMS;
    }
}

// let output = evenOdd("chatgpt");
// console.log(output);





//----------- problem - 3 --------------

function isLGSeven(x) {
    // x is input parameter
    // validation for number
    if (typeof (x) === 'number') {
        //main part of equation
        let mainSum = (x - 7);
        if (mainSum >= 7) {

            let sum = x * 2;
            return sum;
            // return (typeof(mainSum)) ; 
        }
        else if (mainSum < 7) {
            return mainSum;
        } else {
            return "Something error";
        }
    }


    else {
        //error message
        let errorSMS = 'Please Enter Number';
        return errorSMS;
    }
}

// let output = isLGSeven(-15);
// console.log(output);




//----------- problem - 4 --------------

function findingBadData(x) {
    // x is input parameter
    // validation for array
    const isArrays = Array.isArray(x);
    //array define
    if (isArrays) {
        //main part of equation 
        let countNegative = 0;
        // iteration of array 
        for (let i = 0; i < x.length; i++) {
            // find negative value
            if (Math.sign(x[i]) == -1) {
                // counting Negative value 
                countNegative++;
            }
        }
        // total Negative
        return countNegative;

    }
    else {
        //error message
        let errorSMS = 'Please Enter Array';
        return errorSMS;
    }
}
// let x = [-4, -9, -5, -33, -55]
// let output = findingBadData(x);
// console.log(output);




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


