// Event Listeners
// add interactive functionality to html elements

// element.addEventListener("click", function);

const button2 = document.querySelector('.btn-2');
function alertbtn(){
    alert('I also love JavaScript');
};

button2.addEventListener("click", alertbtn);

// Mouseover
const btnthree = document.querySelector('.box-3');
function bgcolor(){
    btnthree.style.backgroundColor = "blue";
};
btnthree.addEventListener("mouseover", bgcolor);

// addEventListener is typically is used more than html on event method
// allows to add multiple ELs to an element
// html on event can be applied only once, if used more than once the last one overrides all others.
