function findLarge(y) {   
    let sss = y[0];
   for (let i = 0; i < y.length; i++) { 
          if (y[i] > sss) {
             sss = y[i];
        } 
  }
    return sss;
}

const y = [12, 4, 2, 21, 31, 425, 345, 35, 34, 32, 6, 544, 64];


// console.log(len)
let x = findLarge(y);
console.log(x);
