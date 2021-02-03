const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');
let menuOpen = false;

menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

    mainMenu.classList.toggle('open');
})

