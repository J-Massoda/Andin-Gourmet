// =============================================== Menu section ===================================

let swiperMenu = new Swiper('.menu-container', {
    // cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidesperview: 2,
        }
    },

    mousewheel: true,
    keyboard: true,
})

hamburger = document.querySelector(".hamburger");
navMenu = document.querySelector(".nav-menu");


// Add an event listener to the hamburger class so when the user clicks on it, the menu
//  displays. If the menu is already displayed, it will simply hide it from view.
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Also add an event listener to each of the page links. This way the menu goes into hiding when the user clicks on a link.
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))