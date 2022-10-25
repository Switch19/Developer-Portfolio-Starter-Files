const menuToggle = document.querySelector('.menu');
const buttonToggle = document.querySelector('.nav-toggle');
buttonToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('toggle');
})