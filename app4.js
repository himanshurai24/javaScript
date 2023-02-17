/* Event Propagation 
the addEL method travels through the whole DOM to its target(like electricity) 
Target > this phase occurs when it reaches its target
Event Bubbling > when the EL bubbles up from the target to the highest position in the dom tree > accomplished by changing false > false. */

window.addEventListener("click", function() {
    console.log("window");
}, false); // by default set to false

document.addEventListener("click", function() {
    console.log("document");
}, false);

document.querySelector(".div2").addEventListener("click", function (e){
    console.log("div2");
    // e.stopPropagation()  // stops event propagation (capturing as well as bubbling)
}, {once: true});  //one more function of EveProp is when we want an EL to fireoff only once.

document.querySelector(".div1").addEventListener("click", function() {
    console.log("div1");
}, false);

document.querySelector(".button").addEventListener("click", function(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText = "clicked !");
    e.preventDefault()
},false);