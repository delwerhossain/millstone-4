var fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits.indexOf('Banana'))
fruits[1] = 'Mango'
console.log(fruits)
//   detele --> 
fruits.pop('Orange')
// console.log(fruits)

// add 
fruits.push('Watermelon')
console.log(fruits)


////////////////////////////////////////////////////////////////////
// marks finder 

var myS = 85
var tomS = 66
var joneS = 95
var petterS = 56
var johnS = 40
var test = 9

// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

if (test >= 80) {
    console.log('you get A')
}
else if (test >= 60){
    console.log('you get B')
}
else if (test >= 50){
    console.log('you get C')
}
else if (test >= 40) {
    console.log('you get D')
}
else {
    console.log('You are fail')
}
