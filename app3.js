// Reveal Event

const revealbtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent(){
    if(hiddenContent.classList.contains("display")){
        hiddenContent.classList.remove("display");
        console.log(hiddenContent.classList);
    } else {
        hiddenContent.classList.add("display");
        console.log(hiddenContent.classList);
    }
};

revealbtn.addEventListener("click", revealContent);



