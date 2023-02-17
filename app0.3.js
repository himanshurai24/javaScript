// Traverse the DOM
let ul = document.querySelector('ul')
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode); // document
// console.log(html.parentElement); // null

// Child Node Element
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[3].style.backgroundColor = "blue";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal
console.log(ul.previousSibling);  // text
console.log(ul.previousElementSibling); // h1 tag
console.log(ul.nextSibling);  // text
console.log(ul.nextElementSibling); // null

const div = document.querySelector('div');
console.log(div.childNodes);
console.log(div.children);





