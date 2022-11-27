const header = document.querySelector('header')
const navbar = document.querySelector('.navbar')
const galleryImgs = document.querySelectorAll('.gallery-img')
const lightboxContainer = document.querySelector('.lightbox-img-container')
const lightboxImg = document.querySelector('.lightbox-image')
const blurBg = document.querySelector('.blur-bg')
const imgBoxes = document.querySelectorAll('.img-box')

function headerPosition() {
    navbar.style.top = `${header.offsetHeight}px`
}

addEventListener('load', headerPosition)
window.addEventListener('resize', headerPosition)

function showLightboxImg(e) {
    let scrollPositon = window.scrollY
    lightboxContainer.innerHTML = `<img class="lightbox-image" src="${e.target.src}" alt="">`
    lightboxContainer.classList.toggle('hide')
    document.body.classList.toggle('scroll-disable')
    document.body.style.top = `-${scrollPositon}px`
    blurBg.classList.toggle('blur-bg-active')
}

galleryImgs.forEach(img => img.addEventListener('click', showLightboxImg))

function hideLightboxImg() {
    let scrollValue = Math.abs(parseInt(document.body.style.top))
    document.querySelector('.lightbox-image').classList.add('hide')
    lightboxContainer.classList.toggle('hide')
    blurBg.classList.toggle('blur-bg-active')
    document.body.classList.toggle('scroll-disable')
    window.scrollTo({
        top: scrollValue,
        behavior: 'instant'
    })
}

lightboxContainer.addEventListener('click', hideLightboxImg)

imgBoxes.forEach(imgBox => {
    imgBox.style.height = `${imgBox.offsetWidth}px`
})

function imgBoxResize(){
    imgBoxes.forEach(imgBox => {
        imgBox.style.height = `${imgBox.offsetWidth}px`
    })
    
}

window.addEventListener('resize', imgBoxResize)