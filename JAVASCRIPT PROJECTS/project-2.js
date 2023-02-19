let openbtn = document.getElementById('open-btn')
let modalConatiner = document.getElementById('modal-container')
let closebtn = document.getElementById('close-btn')

openbtn.addEventListener('click', function(){
    modalConatiner.style.display = 'block';

});

closebtn.addEventListener('click', function(){
    modalConatiner.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === modalConatiner){
        modalConatiner.style.display = 'none'
    }
});