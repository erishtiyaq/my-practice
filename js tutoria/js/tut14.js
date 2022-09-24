//single elements selectors
// let element
// = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color ='red'
// element.innerText = 'ishu'
// console.log(element);
// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = 'green'
// console.log(sel)
//multi element selector
let elems = document.getElementsByClassName('child');
console.log(elems)
console.log(elems[1]);

elems = document.getElementsByTagName('div')
