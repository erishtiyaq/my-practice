 var marks = [2,3,4,5,6];
 const frutis = ['orange','mango','apple'];
 const mixed = [ 'apple','banana','grapes',[9,8,3]];
//  we can use array constructor in place of square brackets
 const arr = Array(9,9,9,9);
 console.log(arr);
 console.log(arr.length);
 console.log(arr.indexOf(9));
 console.log(`${arr} ${mixed}`);console.log(Array.isArray(arr));
 arr[0] = 'ishtiyaq';
 console.log(arr);
 // mutating or midifing arrays
 marks.push(24);
 console.log(marks);
 marks.unshift(9000)
 console.log(marks)
 //here we came to know two things we use push to insert a number at backside and unshift for front.and pop is used to extract a elemnt from end side and use shift if extract from front
 marks.splice(1,3);
 console.log(marks);

let marks2 = [9,0,7,8];
marks = marks.concat(marks2);
console.log(marks);
let myobj = {
    name: 'ish',
     channel: 'ishugaming',
     isactive: true,
     marks:[1,4,5,6],

}
console.log(myobj);
console.log(myobj.isactive);

 