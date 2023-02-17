// Dom Manipulation

// GetElementById()

const title = document.getElementById('main-heading');
console.log(title);




// GetElementByClassName()
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);



// GetElementByTagName()
const listItem = document.getElementsByTagName('li');
console.log(listItem);


//querySelector() - to select the first item that matches the selector - can accept all css style selectors
// const container = document.querySelector('div');
// console.log(container);

//querySelectorAll()
const container = document.querySelectorAll('div');
console.log(container);
