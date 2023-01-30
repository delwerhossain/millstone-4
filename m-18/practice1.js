
////////////////////////////////////////////////////////////////////
/* 1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.*/
var x = 13;
var y = 79;
var z = 45;

if ((x > y) && (x > z)) {
    console.log("big Number is x = 13")
}
else if ((y > x) && (y > z)) {
    console.log("big Number is y = 79")
}
else if ((z > x) && (z > y)) {
    console.log("big Number is z = 45")
} else {
    console.log("error")
}




/*2.You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal
*/
var a = 9;
var b = 9;
var c = 8;


if (a = b) {
    console.log("a and b same Value")
}
else if  (b = c) {
    console.log("b and c same Value")
}
else if  (c = a) {
    console.log("a and b same Value")
}