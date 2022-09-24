let element = document.createElement('li');
// add a class name to the element
element.className = 'ishu'
element.setAttribute('title','creat it');
element.innerText = 'hello it is created'
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is creted node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2)