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

// let output = evenOdd(5654);
// console.log(output);