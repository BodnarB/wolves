const header = document.querySelector('header')
const navbar = document.querySelector('.navbar')

window.addEventListener('resize', () => {
    navbar.style.top=`${header.offsetHeight}px`
})