
const toggler = document.querySelector('.toggler')
const sidebar = document.querySelector('.sidebar')

const showFull = () => {
    toggler.addEventListener('click', ()=> {
        toggler.classList.toggle('active')
        sidebar.classList.toggle('active')
    })
}

showFull()