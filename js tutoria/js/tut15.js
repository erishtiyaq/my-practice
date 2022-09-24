let cont = document.querySelector('.no');
 cont = document.querySelector('.container');
// console.log(cont.childNodes);
//if we use children in terns of childnodes it will exclude comment and text lines
// console.log(cont.children);
// let nodeName = cont.childNodes[2].nodeName;
let nodeType = cont.childNodes[2].nodeType;
// console.log(nodeType);
//node types
// one is for Element
// 2 is for attribute
// 3 is for text nodeType
// 8 is for Comment
// 9 is for document
// 10 is for doctype
let container = document.querySelector('.container');
// console.log(container.children[1].children[0].children[0]);
// we use children one thn . children for to get children of children and keep continue
// console.log(container.firstElementChild)
// console.log(container.childElementCount)
//here we came to know of father of first element by using parentnode
console.log(container.firstElementChild.nextElementSibling);


