function paperRequirement(x = 0, y = 0, z = 0) {
    let Value = x + y + z;
    if ((typeof (Value) === 'number') && (Value % 1 === 0)) {
        let book1 = x * 100;
        let book2 = y * 200;
        let book3 = z * 300;
        let total = book1 + book2 + book3;
        return total;
    }
    else {

        console.log("please enter the Number Value");
    }
}

let book1 = 1;
let book2 = 2;
let book3 = 1.5;
let totalPaper = paperRequirement(book1, book2, book3);
console.log(totalPaper);