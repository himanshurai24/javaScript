/*  Event Delegation 
> allows users to append a single Event Listener to a parent element that adds it to all of its present and future descendants (if they match the selector)
> code quality and code maintenance
> saves memory  */


// document.querySelector("#football").addEventListener("click", function(e){
//     console.log("football clicked");
//     // console.log(e.target);
//     e.target.style.backgroundColor = "red";

// }) // create seperate one for each list item

document.querySelector('#sports').addEventListener("click", function(e){
    console.log(e.target.getAttribute('id') + " clicked");
    if(e.target.matches('li')){
        e.target.style.backgroundColor = 'lightgrey'; // so that it applies to only list items and not other elements(in case they are present in ul).
    }
})


// adding a child to check if works on the future descendants
const sports = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');
sports.appendChild(newSport)