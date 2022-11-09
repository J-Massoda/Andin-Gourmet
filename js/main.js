// /* Open when someone clicks on the span element */
// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
// }
// Access the hamburger and nav-menu classes.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


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

// Slide show ........................................................................
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 6 seconds
}