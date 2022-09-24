// const age = 19;
// if (age==19){
//     console.log('age is nineteen')
// }
// else if (age==65){
//     console.log('age is sixty five')

// }
// else{
//     console.log('age is not nineteen')
// }

// const agee = 65;
// if (agee!=20){
//     console.log('age is not twenty')
// }
// else if (agee==65){
//     console.log('age is sixty five')

// }
// else{
//     console.log('age is  twenty')
// }
const age = 18;
const drive = true;
if (drive && age>=18){
    console.log('you can drive')

}
else{
    console.log('you can not drive')
}
// here and oprator says that both the conditon should be true
const agee = 17;
const drivee = true;
if (drivee || agee>=18){
    console.log('you can drive')

}
else{
    console.log('you can not drive')
}
// we use or oprator here it checks one value to be true
//turnary opraotor

console.log(age==45? 'age is 45': 'age is not 45');
switch (age) {
    case 18:
        console.log('u r 18');
        
    break;
    case 28:
        console.log('u r 28');
    
   break;
case 38:
     console.log('u r 38');

break;
    

    default:
        console.log('u r unknown age')
        
        break;
}