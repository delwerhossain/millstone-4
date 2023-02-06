//----------- problem - 3 --------------

function isLGSeven(x) {
    // x is input parameter
    // validation for number
    if (typeof (x) === 'number') {
        //main part of equation
        let mainSum = (x - 7);
        if (mainSum >= 7) {

            let sum = mainSum * 2;
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
// let output = isLGSeven(13);
// console.log(output);