
const toggle = document.querySelector('.menu_toggle');
// const menu = document.querySelector('.menu');

const show_menu = () => {
    toggle.addEventListener('click', ()=> {
        toggle.classList.toggle('active');
        // menu.classList.toggle('active');
    })
}

show_menu();