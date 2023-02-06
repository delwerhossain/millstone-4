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