//type conversion and type coercion
// console.log('welcome   to lecture five');
// let myvar;
// myvar = string(34);
// // console.log(myvar, (typeof myvar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));
let date = String(new Date());
console.log(date, (typeof date));
let arr = String([1,2,3,4,5]);

// console.log(arr.length,(typeof arr))
//it became now string therfore its soze will be nine
// othervise it was five before it
// let i = 8;
let a =true;
// console.log(i.toString());
console.log(a.toString());
//now it became the string

let stri = Number('3434');
console.log(stri,(typeof stri));
let number = parseInt('34');
console.log(number.toFixed(3),(typeof number))
// here it was string before but after using the parseint it converts into number
//.tofixed is used the number of zero we want after a number
//type coercion
let mystr =Number('56');
let mynum = 99
console.log(mystr + mynum);

