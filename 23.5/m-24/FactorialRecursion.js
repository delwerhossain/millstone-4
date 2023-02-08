function recursion(i){
    if (i==1){
        return 1;
    }
    return i + recursion(i-5);


}
let output = recursion(5);
console.log(output);