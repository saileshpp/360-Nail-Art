const hamburger = document.querySelector('header .hamburger')
const navbar = document.querySelector('header .navbar')
const header = document.querySelector('header')



hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-active')
    hamburger.classList.toggle('is-active')
})


window.addEventListener('scroll', () => {
    if (window.scrollY) header.classList.add('header-scroll')
    else header.classList.remove('header-scroll')
})

AOS.init({
    duration: 1000,
    once: true,
    offSet: false,
})

const lightgallerys = document.querySelectorAll('.lightgallery')
if (lightgallerys) {
    lightgallerys.forEach(
        lightgallery => {
            lightGallery(lightgallery, {
                plugins: [lgZoom, lgThumbnail],
                speed: 500,
            });
        }
    )

}