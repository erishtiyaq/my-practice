// console.log('hi');
let impArray = ['adrak', 'pyaz','bindi']
localStorage.setItem('name', 'ish');
localStorage.setItem('name2', 'ishuu');
localStorage.setItem('sabzi' , JSON.stringify(impArray));
let name = localStorage.getItem('name');
name  = JSON.parse(localStorage.getItem('sabzi'))
console.log(name);
// localStorage.clear()
//it clears the entire local StorageManager
localStorage.removeItem('name2');