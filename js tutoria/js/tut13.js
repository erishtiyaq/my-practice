// let ish = [3,4,6,7];
// ish.forEach(function(arrvalue,index){
//     console.log(index + ' '+ arrvalue)
// })
// let how = [3,4,6,7];
// how.forEach(function(val,ind,arr){
//     console.log(val)
// })

// let a = 'ish';


// Array.from(a).forEach(function(val){
//     if(val==='i')
//     console.log(val);
//     else{
//         console.log('not include ur name');
//     }
// })

// if (document.body.indexof("http://127.0.0.1:5500/ish")) {
//     console.log(ish.com)
    
// }
// else{
//     console.log('sorry this is not avilable')
// }
let str = 'python';
let str1 = 'harry'
let links = document.links;
console.log(links);
Array.from(links).forEach(function(element){
    href = element.href;
    if(href.includes(str)){
    console.log(href);

} 
   
}
);