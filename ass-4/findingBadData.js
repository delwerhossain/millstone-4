//----------- problem - 4 --------------

function findingBadData(x) {
    // x is input parameter
    // validation for array
    const isArrays = Array.isArray(x);
    //array define
    if (isArrays) {
        //main part of equation 
        let countNegative = 0;
        for (let i = 0; i < x.length; i++) {
            if (Math.sign(x[i]) == -1) {
                countNegative++;
            }
        }
        return countNegative;

    }
    else {
            //error message
            let errorSMS = 'Please Enter Array';
            return errorSMS;
        }
    }
    let x = [34, 354, 35, 3, 5, 'fasdfa', 353, 35]
    let output = findingBadData(345);
    console.log(output);