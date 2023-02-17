
// Styling Elements
const title = document.querySelector('#main-heading');

title.style.color = 'red'; // inline styling > works for only one element
// console.log(title);

const listItems = document.querySelectorAll('.list-items');
// // listItems.style.fontSize = '2rem'; // this doesn't work

for(i=0; i<listItems.length; i++){
    listItems[i].style.fontSize = '2rem'; // this does 
}

// console.log(listItems);

// Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
ul.append(li);

// Modifying the text
// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);  // security issues > hence not used

li.innerText = 'X-men';

// Modifying attributes & Classes
li.setAttribute('id', 'main-heading'); //inherits the properties of given attribute
li.removeAttribute('id');
// li.setAttribute('class', 'list-items');
console.log(title.getAttribute('id'));


li.classList.add('list-items');
// li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));

// Removing Elements
li.remove();



