console.log('m in nineth chapter of my lesson');

// we have for loop while loop do while loop
// for(let i=0; i<=20;i=i+2){
//     console.log(i);
// }
// let j = 0;
// while (j<=20) {
//     console.log(j);
//     j++;
    
// }
// let k = 11;
// do {
//     console.log(k+1);
//     k++;
    
// } while (k<10);
// let k = 0;
// do {
//     console.log(k+1);
//     if (k===5) {
//         break;
        
//     }
//     k++;
    
// } while (k<10);
// console.log('done');
// let k = 0;
// do {
//     if (k===5) {
//         k++
//         continue;
        
//     }
//     console.log(k+1);
//     k++;
    
// } while (k<10);
// let arr = [2,3,4,5,6];
// arr.forEach(function(element){
//     console.log(element);
    
// })
let obj = {
    name: 'ishu',
    age: 23,
};
for(let key in obj)
{
    console.log(`${key} ${obj[key]}`)
}
