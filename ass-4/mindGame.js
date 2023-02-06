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