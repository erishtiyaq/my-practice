//iterative approach
// var ans = 1;
// const iterativeFactorial = (number) =>{
//     for(let i = number; i>0; i--){
// ans = ans * i;
//     }
// }
// iterativeFactorial(3);
// console.log(ans);



// //recursive appproach
// const recursiveFactorial = (number) =>{
//     if(number == 2){
//         return 2;
//     }
//     return number * recursiveFactorial(number-1)

// }
//  var ans = recursiveFactorial(7);
// console.log(ans)




//iterative approach
// let arr = [0,1];
// let sum = 0;
// const iterativeFibonacci = (number) =>{
//     for(let i =0; i<number; i++){
//         sum = arr[i] + arr[i+1];//0+1
//         arr.push(sum);//[0,1,1]
//     }

// }
// iterativeFibonacci(7);
// console.log(arr);





//recursive approach
// const recursiveFibonacci = (number) =>{
//     if(number < 2){
//                 return 1;}
//     return recursiveFibonacci(number-1) + recursiveFibonacci(number-2)
// }
// var ans = recursiveFibonacci(6);
//  console.log(ans)





// prime numbers from one to ten
// let n = 10;
// nextPrime:
//    for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++){
//         if(i % j == 0) continue nextPrime
//     }

//     alert( `this is prime no ${i}` );
// }




// example two
// let n = prompt(`number`)
// nextPrime:
//    for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++){
//         if(i % j == 0) continue nextPrime
//     }

//     alert( `this is prime no ${i}` );
// }




// let n = prompt(`number`)

//     if(n % 2 == 0){
//     alert( `this is not  prime no` );}

//     else{
//         alert(`this is prime number`)
//     }





// even number from zero to ten
// for(let i =2; i <= 10; i++){
//     if(i % 2 == 0){
//         alert(`this is even number my dear     ${i}`)
//     }
// }





// function checkAge(age){
//     if(age > 18){
//         return true;
//     }
//     else{
//         return confirm(`did parents allow you to do this`)
//     }
// }
//    alert(checkAge(69))





// by using or oprator

//    function checkAge(age){
//     return (age > 18 ) ||  confirm(`r u allowed`)
// }
//    alert(checkAge(19))




// Object

// let User = {};
// User.name ="ish";
// User.surname ="qadir"
// User.name ="suhail";
// delete User.name;
// console.log(User)



// sum Object by using object.values()&reduce method to itetrate over the aray

// let saleries = {
//     ish:  100,
//     suhail: 200,
//     jana: 300,

// };
// let values = Object.values(saleries);
// const sum = values.reduce((accumulator, value) => {
//     return accumulator + value;}, 0);

// console.log(sum);




// Initialize a sum variable to 0 using the let keyword.
// Use the Object.values() method to get an array of the object's values.
// Use a for...of loop to iterate over the array and increment the sum variable by the current value.

// const obj = {
//     one: 5,
//     two: 15,
//     three: 45,
//   };

//   let sum = 0;

//   for (const value of Object.values(obj)) {
//     sum += value;
//   }

//   console.log(sum);




// To sum the values of an object:

// Initialize a sum variable to 0 using the let keyword.
// Use the for...in loop to iterate over the object's properties.
// On each iteration, increment the sum variable with the current value.

// const obj = {
//     one: 5,
//     two: 15,
//     three: 45,
//   };

//   let sum = 0;

//   for (const key in obj) {
//     sum += obj[key];
//   }

//   console.log(sum);



//switch case type matters

// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }



// let arg = +prompt("Enter a value?");
// switch (arg) {
//   case 0:
//   case 1:
//     alert( 'One or zero' );
//     break;

//   case 2:
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }



//by if condtion
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }




//by switch case
// let arg = +prompt("enter the number");
// switch (arg) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }



// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); // John before the function call

// showMessage();

// alert( userName );




// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', );
//   //checkAge(age);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }



// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
    
//   }
//   let age = +prompt("enter ur age")
// if(checkAge(age)){
//     alert ('acess granted')
// }
// else{
// alert("acess denied")}



// //pow
// function power(x,y){  
//     var x = +prompt("enter the base");
//     var y = +prompt("enter the power");
//     var result = Math.pow(x,y);
//     alert(`yeh loo karo aysh no is = ${result}`)
// }
// power()


// function getIt(){
//     console.log("hello buddy")
// }
// getIt()


// function add (a,b){
//     sum = a + b;

// }
// add(4,3);
// console.log(sum)




//Multiply numeric property values by 2

// let salaries = {
//     width: 200,
//     height: 160,
    
//   };
  
//   let multiply = 0;
//   for (let key in salaries) {
//     multiply += 2*salaries[key];
//   }
  
//   alert(multiply);






//object copying and refrencing
// var user = {
//     name: "ish",
//     age:23
// }
// var clone = user;
// clone.name = "john"
// console.log(clone);
   // user ,the memory assighed to it is pointed by this object user and also the clone also pointing the same memory block.It means they have now two refrences.

   
    
// var old = {
//     name: "ish",
//     age:23
// }
// clone = {}
// for(let users in old ){
//     clone[users] = old[users] 
// }
// clone.name  = "pet"
// console.log(old,clone)
//here we clone without the change of actual name


// we can use add propertry by using Object.assign method

// var old = {
//     name: "ish",
//     age:23
// }
// clone = {}
// let property1 = {name2 : "suhail"}
// Object.assign(old,property1);
// console.log(old)
//with the help of this we add property1


//we can directly the values even for example

// var old = {
//     name: "ish",
//     age:23
// }
// clone = {}
// Object.assign(old,{name2 : "suhail"});
// console.log(old)


// var old = {
//     name: "ish",
//     age:23
// }
// var clone = bject.assign({} , old);
// clone.name =  "peter"
// console.log(clone)
//{}this is target here and source is old here old value gets copy in {}empty object


//object this

// let user = {
//    name: "John",
//    age: 30,
 
//    sayHi() {
//      // "this" is the "current object"
//      alert(this.name);//here we can  even use  of (user) variable in place of .this but is not prefered to use 
//    }
 
//  };
 
// user.sayHi() // John


// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }
// user.f= sayHi;
// admin.f = sayHi;
// user.f()
// admin['f']()  //we can use brackets in place of dot even  


//calculator using objects;
// let calculator = {
//    sum() { 
//       return this.a + this.b;
//    },
//    mul(){
//       return this.a + this.b;
//    },
//    read(){
//       this.a = +prompt(`enter the first number`);
//       this.b = +prompt('enter ur second number ?',0);

//    }
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// ladder problem


// let ladder = {
//    step: 0,
//    up() {
//      this.step++;
//    },
//    down() {
//      this.step--;
//    },
//    showStep: function() { // shows the current step
//      alert( this.step );
//    }
//  };
 

//  ladder.up();
//  ladder.up();
//  ladder.down();
//  ladder.showStep(); // 1
//  ladder.down();
//  ladder.showStep(); // 0
//Modify the code of up, down and showStep to make the calls chainable, like this:

//ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0



//fibonacciGenertor

// function fibonacciGenertor (n) {
//    var output = [];
   
// if(n===1){
//    output = [0];
// }
// else if (n===2){
//    output = [0,1]
// }
// else {
//    output = [0,1];
//    // output.push(output[0] + output[1]);// [0,1,1] but dinaminally we would use this method
//    for(var i = 2; i<n; i++){
//    output.push(output[output.length - 2] + output[output.length - 1])
// }
// }
// return output;

// }
// var answer = fibonacciGenertor(6);
// console.log(answer)





//Symbol() it is a new data type with unique value after symbol its is the defination of symbol or identifire of it

// let id1 = Symbol("hello")
// let id2 = Symbol("hello")
// console.log(id1===id2);//false they are not same but in case of other data type they are same .
//  let id = Symbol("hello");
 //we can not use it directly in our programe for in alert it would give us an error
// alert(id) // error
//but we can use of tostring to convert it into string example
//alert(id.toString());//symbol hello
// but if we want to print only the hello then we can use (id.description);
// let age = Symbol("age");
// let user = {
//    name: 'ish',
//    class: 'btech',
//    [age]: 24
// }
// console.log(user[age]);



//for in loop is used to print multuiple properties of objecr
// var obj = {
//    first: "ish",
//    weight:23
// }
// for(var store in obj){
   
//    console.log(`${store} = ${obj[store]}`)
// };






// //map and object
// const map = new Map([
//    [1,"one"],
//    [2,"two"]
// ]);
// const obj = {
//    1 : "one",
//    2 : "two",
// };
//  console.log({map, obj});
//  //set in map
 
//  map.set(3,"three");
//  console.log(map);
//  //set in obj
//  obj[3] = "three";
// console.log(obj);
// //get in map
// console.log( map.get(3));
// //get in obj
// console.log(obj[3]);

// //delete in map
// map.delete(3);
// //delete obj keyss
// delete obj[3];

// //getting keys of obj
// console.log(map.keys());
// //getting keys in obj
// console.log(Object.keys(obj));
// //has in map
// console.log(map.has(2))
// //has in obj
// console.log(2 in obj)
// //values in map
// console.log(map.values());
// //values in obj
// console.log(Object.values(obj))
// //entries in map
// console.log(map.entries())
// //entries in obj
// console.log(Object.entries(obj))
// //length of map
// console.log(map.size)
// //length of object
// console.log(Object.keys(obj).length);
// //iteration in maps
// for (const [key,value] of map){
//    console.log({key,value})
// }


// //iteration in obj
// for(const [key,value] of Object.entries(obj)){
//    console.log({key,value});
// }
// // for each in map
// map.forEach((value, key) =>
// console.log({key, value}));
// // using for each in obj
// Object.entries(obj).forEach(([key,value]) => 
// console.log({key,value}))


// //swap keys and values in map
// const swapMap = Array.from(map).reduce((acc,[key,value]) => {
//    acc.set(value, key);
//    return acc;

// },new Map());
// console.log({swapMap});

//set holds unique value only nor duplicate numbers
// it contains only unique values
// object constructor

// let arr =[1,2,3,4,]
// let set = new Set(arr);
// console.log(set)
//weak set 
// it contains only unique object
// const ws = new WeakSet()
// let obj = {},dusra ={}
// ws.add(dusra)
// ws.add(obj)
// ws.add(obj)
// console.log(ws)
 

// function unique(arr) {
//    return Array.from(new Set(arr))
//  }
 
//  let values = ["Hare", "Krishna", "Hare", "Krishna",
//    "Krishna", "Krishna", "Hare", "Hare", ":-O"
//  ];
 
//  alert( unique(values) );
 

//  function unique(put) {
//    return Array.from(new Set(put))
//  }
 
//  let values = ["jana", "isha", "jana", "isha",
//    "isha", "isha", "jana", "isha", ":-O"
//  ];
 
//  alert( unique(values) );

// anagrams
 
// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );





//destructing array

// we have an array with the name and surname
// we have an array with the name and surname
// let arr = ["John", "Smith"]

// // destructuring assignment
// // sets firstName = arr[0]
// // and surname = arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // John
// alert(surname);  // Smith

// second element is not needed


//the comma skipps the elements here i use three comms the answer will be //of the roman republic


// let [firstName,  , ,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title ); // of the roman republic

// let user = {};
// [user.name, user.surname] = "John Smith".split(' ');
// //here j and o are two element but appliyig split john and user becomes ist and second element

// alert(user.name); // John
// alert(user.surname); // Smith

//swapping with the help of distuctive

// let guest = "Jane";
// let admin = "Pete";

// // Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];
// alert(guest)//pate
// alert(admin)//jane


// The rest ‘…’
// Usually, if the array is longer than the list at the left, the “extra” items are omitted.

// For example, here only two items are taken, and the rest is just ignored:
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// // rest is array of items, starting from the 3rd one
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2//we can use any var in place of rest with three dots




//pbject destruction
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200

//shortcuts
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;

// // width -> w
// // height -> h
// // title -> title

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200


//We also can combine both the colon and equality:

// let options = {
//   title: "Menu"
// };

// let {width: w = 100, height: h = 200, title} = options;

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200

//destruc with nested
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };
// //console.log(options.size.width) to get rid of this we will use destructive method
// let {
//   size: { // put size here
//     width,
//     height
//   },
//   items: [item1, item2], // assign items here
//   title = "Menu" // not present in the object (default value is used)
// } = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200
// alert(item1);  // Cake
// alert(item2);  // Donut



// we pass object to function
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// // ...and it immediately expands it to variables
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – taken from options,
//   // width, height – defaults used
//   alert( `${title} ${width} ${height}` ); // My Menu 200 100
//   alert( items ); // Item1, Item2
// };
// //showMenu({})//we would use if we display only defalult value of function but for uing values of object we have to declare it like this
// showMenu(options)


//an ecample
// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

//closure ... a function which can access to the outer function variables ,parameters as well as all the global varibles.
//for example
// const outerfun = (a) => {
//    let b = 10;
//    const innerFun = () => {
//       let sum = a + b;
//       console.log(`sum is ${sum}`)

//    }
//    innerFun()
// }
// outerfun(5)

